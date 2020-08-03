
let negotiationhandler = function () {
    let negotiation = $('#negotiation-icon > a');
    negotiation.click((e) => { e.preventDefault() });
    negotiation.mouseenter(function (e) {
        $.ajax({
            type: "get",
            url: `/negotiate/getNegotiations`,
            success: function (data) {
                let table = $('#negotiation-table-body');
                $('#negotiation-table-body > tr').remove();
                data.data.forEach((item) => {
                    let newRow = createnegotiationItem(item);
                    table.prepend(newRow);
                })
            }, error: function (err) {
                new Noty({
                    theme: 'relax',
                    text: 'Please Login to See Negotiation Items',
                    type: 'error',
                    layout: 'topRight',
                    timeout: 2000
                }).show();
                console.log(err);
            }
        });
    })
}

let createnegotiationItem = (data) => {
    console.log(data);
    return $(`
    <tr id="negotiation-item-${data.item._id}">
<td class="si-pic">
<a href="/order/buy_product/${data.item._id}">  <img src="${data.item.image}" style="width:50px;height:50px" alt="" /></a>
</td>
<td class="si-text">
    <div class="product-selected">
        <p>Rs ${data.praposedPrice} x ${data.quantity}</p>
        <h6>${data.item.title}</h6>
        <h6>Code : ${data.code}</h6>
    </div>
</td>
</tr>`)
}

negotiationhandler();
