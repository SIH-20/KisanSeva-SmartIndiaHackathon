const Items = require('../models/item');
const Users = require('../models/User');
const Category = require('../models/Category')

module.exports.upload = (req, res) => {
    Items.uploadedImage(req, res, async function (err) {

        try {
            if (err) {
                console.log("multer error", err);
                return;
            }
            if (!req.file) {
                console.log("image not uploaded");
                return;
            } else {
                let newItem = await Items.create({
                    title: req.body.item_name,
                    farmer: '5f1d3b03b10d913f41eabf2b',
                    price: req.body.price,
                    quality: req.body.quality,
                    quantity: req.body.quantity,
                    category: req.body.category,
                    stock_quantity: req.body.quantity,
                    description:req.body.description,
                    type:req.body.type
                });
                newItem.image = `${Items.imagePath}/${req.file.filename}`;
                await newItem.save();

                let category = await Category.findOne({ name: req.body.category })
                if (category) {
                    category.items.push(newItem._id)
                    category.items.sort(function (I1, I2) {
                        if (I1.quality == 'Premium') {
                            return true;
                        } else {
                            return false;
                        }
                    })
                    await category.save()
                }
                else {
                    let newCategory = await Category.create({ name: req.body.category })
                    newCategory.items.push(newItem._id)
                    await newCategory.save()
                }

                if (req.xhr) {
                    console.log("uploading via ajax")
                    return res.status(200).json({
                        data: {
                            item: newItem
                        },
                        message: "Item Uploaded!"
                    });

                }
                return res.redirect('back');
            }


        } catch (error) {
            console.log(error);
            return;
        }
    });
}
