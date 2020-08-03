<<<<<<< HEAD
let qualitySelection = function () {
    $('.quality-selector').each(function () {
        let self = this;
        $(self).click(function (e) {
            e.preventDefault();
            $.ajax({
                type: "get",
                url: `/order/getSellers/?category=${$(self).attr('data-category')}&quality=${$(self).attr('data-quality')}`,
                success: function (data) {
                    let table = $('#list-sellers');
                    $('#list-sellers > div').remove();
                    $('#number-of-sellers').text(`${data.sellers.items.length}`);
                    data.sellers.items.forEach((seller) => {
                        let newRow = addSeller(seller);
                        table.prepend(newRow);
                        addRating(`#rating-${seller._id}`)
                        showInfo(`#radio-${seller._id}`, seller)
                        showComments(`#radio-${seller._id}`, seller)
                    })
                    $('input[name="farmer-selected"]').each(function(seller){
                    let self = this;                                          
                    $(self).on('click',function(){
                        let itemId = $(self).attr('data-item');
                        $.ajax({
                            type: 'GET',
                            url: `/maps/farmer?id=${itemId}`,
                            success: function (data) {
                                //addMarker(data);
                                window.open(`https://www.google.com/maps/search/?api=1&query=${data.lattitude},${data.longitude}`);
                            },
                            error: function (err) {
                                console.log(err);
                            }
                        })
                    })
                    })
                    new Noty({
                        theme: 'relax',
                        text: 'Select a Seller',
                        type: 'success',
                        layout: 'topRight',
                        timeout: 2000
                    }).show();
                }, error: function (err) {
                    new Noty({
                        theme: 'relax',
                        text: 'Please Login to See Cart Items',
                        type: 'error',
                        layout: 'topRight',
                        timeout: 2000
                    }).show();
                    console.log(err);
                }
            });
        })
    })
}

let addSeller = (data) => {
    return $(`
    <div class="co-item" id ='${data.farmer._id}'>
    <input type = radio class="farmer-radio-btn" data-item=${data._id} name = "farmer-selected" id="radio-${data._id}">
    <label for="radio-${data._id}">Rs.${data.price}</label>
    <div class="avatar-pic">
        <img src="${data.image}" alt="">
    </div>
    <div class="avatar-text">
        <div class="at-rating" id="rating-${data._id}" data-rating=${4}>
        </div>
        <h5>${data.farmer.name}<div style="display:inline"><p data-toggle="tooltip" data-placement="top" title="Verified by Farmer" style="color:#019AE9;display:inline"><i class="fas fa-check-circle"></i></p>  <p data-toggle="tooltip" data-placement="top" title="Verified by Logistics" style="color:#57B647;display:inline"><i class="fas fa-check-circle"></i></p></div></h5>
        <div class="at-reply">${data.description}</div>
        <br/><p style="font-size:80%">uploaded on- ${data.createdAt.split("T")[0]}</p>
    </div>
</div>`)
}

function addRating(element) {
    var rating = $(element).attr('data-rating')
    for (let i = 0; i < rating; i++) {
        $(element).append('<i class="fa fa-star"></i> ')
    }
    $(element).append(' <i class="fa fa-star-o"></i>')
}

function showInfo(element, product) {
    $(element).click(function () {
        $('.specification-table table').remove()
        $('.specification-table').append(`<table>
        <tr>
            <td class="p-catagory">Description</td>
            <td>
                <p>${product.description}</p>
            </td>
        </tr>
        <tr>
            <td class="p-catagory">Availability</td>
            <td>
                <div class="p-stock">${product.stock_quantity} in stock</div>
            </td>
        </tr>
        <tr>
            <td class="p-catagory">Producing District</td>
            <td>
                <div class="p-weight">${product.farmer.address}</div>
            </td>
        </tr>
    </table>`)
    })
}

function showComments(element, item) {
    $(element).click(function () {
        $.ajax({
            type: "get",
            url: `/order/getComments/${item._id}`,
            success: function (data) {
                let div = $('#customer-reviews');
                $('#num_comments').text(data.comments.length)
                data.comments.forEach((comment) => {
                    $(div).append(`<div class="co-item">
                    <div class="avatar-pic">
                        <img src="${comment.buyer.avatar}" alt="">
                    </div>
                    <div class="avatar-text">
                        <div class="at-rating" id = "rating-${comment.id}" data-rating=${comment.rating}>
                        </div>
                        <h5>${comment.buyer.first_name}<span>${comment.createdAt}</span></h5>
                        <div class="at-reply">${comment.content}</div>
                    </div>
                </div>`)
                    var rating = $(`rating-${comment.id}`).attr('data-rating')
                    for (let i = 0; i < rating; i++) {
                        $(element).append('<i class="fa fa-star"></i> ')
                    }
                    $(element).append(' <i class="fa fa-star-o"></i>')
                })
            }, error: function (err) {
                console.log(err);
            }
        });
    })
}

function addMarker(data) {
        let marker = new L.marker([data.lattitude, data.longitude])
        marker.addTo(map);
        marker.bindTooltip(`${data.name}`).openTooltip();
        marker._icon.setAttribute("data-longitude", data.longitude);
        marker._icon.setAttribute("data-lattitude", data.lattitude);
    addClickeventFarmer();
}
function addClickeventFarmer() {
    $('.leaflet-marker-icon').on('mouseenter', function (e) {
        var el = $(e.srcElement || e.target);
        Lattitude = el.attr('data-lattitude');
        Longitude= el.attr('data-longitude');
        window.open(`https://www.google.com/maps/search/?api=1&query=${Lattitude},${Longitude}`); 
    });
}
qualitySelection();

=======
let qualitySelection=function(){$(".quality-selector").each(function(){let t=this;$(t).click(function(e){e.preventDefault(),$.ajax({type:"get",url:`/order/getSellers/?category=${$(t).attr("data-category")}&quality=${$(t).attr("data-quality")}`,success:function(t){let e=$("#list-sellers");$("#list-sellers > div").remove(),$("#number-of-sellers").text(""+t.sellers.items.length),t.sellers.items.forEach(t=>{let a=addSeller(t);e.prepend(a),addRating("#rating-"+t._id),showInfo("#radio-"+t._id,t),showComments("#radio-"+t._id,t)}),document.querySelectorAll('input[name="farmer-selected"]').forEach(function(t){}),new Noty({theme:"relax",text:"Select a Seller",type:"success",layout:"topRight",timeout:2e3}).show()},error:function(t){new Noty({theme:"relax",text:"Please Login to See Cart Items",type:"error",layout:"topRight",timeout:2e3}).show(),console.log(t)}})})})},addSeller=t=>$(`\n    <div class="co-item" id ='${t.farmer._id}'>\n    <input type = radio class="farmer-radio-btn" data-item=${t._id} name = "farmer-selected" id="radio-${t._id}">\n    <label for="radio-${t._id}">Rs.${t.price}</label>\n    <div class="avatar-pic">\n        <img src="${t.image}" alt="">\n    </div>\n    <div class="avatar-text">\n        <div class="at-rating" id="rating-${t._id}" data-rating=4>\n        </div>\n        <h5>${t.farmer.name}<div style="display:inline">  <p data-toggle="tooltip" data-placement="top" title="Verified by Farmer" style="color:#019AE9;display:inline"><i class="fas fa-check-circle"></i></p>  <p data-toggle="tooltip" data-placement="top" title="Verified by Logistics" style="color:#57B647;display:inline"><i class="fas fa-check-circle"></i></p>\n      </div></h5>\n        <div class="at-reply">${t.description}</div>\n    </div>\n\n      <br/>\n      <p style="font-size:80%">uploaded on- ${t.createdAt.split("T")[0]}</p>\n      </div>`);function addRating(t){var e=$(t).attr("data-rating");for(let a=0;a<e;a++)$(t).append('<i class="fa fa-star"></i> ');$(t).append(' <i class="fa fa-star-o"></i>')}function showInfo(t,e){$(t).click(function(){$(".specification-table table").remove(),$(".specification-table").append(`<table>\n        <tr>\n            <td class="p-catagory">Description</td>\n            <td>\n                <p>${e.description}</p>\n            </td>\n        </tr>\n        <tr>\n            <td class="p-catagory">Availability</td>\n            <td>\n                <div class="p-stock">${e.stock_quantity} in stock</div>\n            </td>\n        </tr>\n        <tr>\n            <td class="p-catagory">Producing District</td>\n            <td>\n                <div class="p-weight">${e.farmer.address}</div>\n            </td>\n        </tr>\n    </table>`)})}function showComments(t,e){$(t).click(function(){$.ajax({type:"get",url:"/order/getComments/"+e._id,success:function(e){let a=$("#customer-reviews");$("#num_comments").text(e.comments.length),e.comments.forEach(e=>{$(a).append(`<div class="co-item">\n                    <div class="avatar-pic">\n                        <img src="${e.buyer.avatar}" alt="">\n                    </div>\n                    <div class="avatar-text">\n                        <div class="at-rating" id = "rating-${e.id}" data-rating=${e.rating}>\n                        </div>\n                        <h5>${e.buyer.first_name}<span>${e.createdAt}</span></h5>\n                        <div class="at-reply">${e.content}</div>\n                    </div>\n                </div>`);var i=$("rating-"+e.id).attr("data-rating");for(let e=0;e<i;e++)$(t).append('<i class="fa fa-star"></i> ');$(t).append(' <i class="fa fa-star-o"></i>')})},error:function(t){console.log(t)}})})}qualitySelection();
>>>>>>> cc292f78755423a0322df7ed258bfc0de3706312
