const Item = require('../../../models/item');
const Order = require('../../../models/Order');
const Quantity = require('../../../models/item_quantity');
const Category = require('../../../models/Category');
const Farmer = require('../../../models/Farmer');
const Transaction = require('../../../models/transaction');
const Feedback = require('../../../models/Feedback');
const Negotiation = require('../../../models/negotiations');

module.exports.info = async (req, res) => {
    try {
        let item = await Item.find({ farmer: req.user._id }).select('-_id');
        let response = { ...req.user };
        delete response._id
        response.items = item;

        return res.status(200).json({
            message: 'Information Retrived Successfully',
            data: response
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports.allOrders = async (req, res) => {
    try {
        let items = await Item.find({ farmer: req.user._id }).select('_id');
        let items_ids = items.map((item, index) => (item._id));
        let quantities = await Quantity.find({ item: { $in: items_ids } }).select('_id');
        let quantity_ids = quantities.map((quantity, index) => (quantity._id));
        let orders = await Order.find({ orderQuantity: { $in: quantity_ids } }).populate({ path: 'buyer', select: 'first_name phone address -_id' }).populate({ path: 'orderQuantity', populate: { path: 'item', match: { farmer: req.user._id }, select: 'title price quality image' }, select: '-_id -__v -cart' }).select('-createdAt -updatedAt -__v');
        for (order in orders) {
            let quantity = orders[order].orderQuantity;
            orders[order].orderQuantity = quantity.filter(function (value) {
                return value.item != null;
            });
            let transaction = await Transaction.findOne({ order: orders[order]._id });
            console.log(transaction);
            orders[order].transactionId = await Transaction.findOne({ order: orders[order]._id });
            delete orders[order]._id;
        }
        return res.status(200).json({
            message: 'Information Retrived Successfully',
            data: orders
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports.allProducts = async (req, res) => {
    try {
        const items = await Item.find({}).populate({ path: 'farmer', select: 'name phone -_id' }).select('-_id');
        return res.status(200).json({
            message: 'Information Retrived Successfully',
            data: items
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports.uploadItem = async function (req, res) {
    try {
        let categoryName = req.body.category;
        let type = req.body.type;
        let newItem = await Item.create({
            title: req.body.item_name,
            farmer: req.user._id,
            price: req.body.price,
            quality: req.body.quality,
            quantity: req.body.quantity,
            category: categoryName.toLowerCase(),
            stock_quantity: req.body.quantity,
            description: req.body.description,
            image: req.body.image,
            type: type.toLowerCase()
        });
        let category = await Category.findOne({ name: categoryName.toLowerCase() })
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
        return res.status(200).json({
            data: {
                item: newItem
            },
            message: "Item Uploaded!"
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: 'Internal Server Error'
        });
    }
}

module.exports.update = async (req, res) => {
    try {
        let farmer = await Farmer.findByIdAndUpdate(req.user._id, {
            phone: req.body.phone,
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            address: req.body.address,
            district: req.body.district
        })
        return res.status(200).json({
            messgae: 'Updated sucessfully',
            data: farmer
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}


module.exports.updateItem = async (req, res) => {
    try {
        let item = await Item.findByIdAndUpdate(req.body.id, {
            title: req.body.item_name,
            price: req.body.price,
            quality: req.body.quality,
            quantity: req.body.quantity,
            stock_quantity: req.body.quantity,
            description: req.body.description,
            image: req.body.image
        });
        return res.status(200).json({
            message: 'Data Updated'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}


module.exports.deleteItem = async (req, res) => {
    try {
        await Category.findOneAndUpdate({ name: req.body.name }, {
            $pull: { items: req.body.id }
        });
        await Item.findByIdAndDelete(req.body.id);
        return res.status(200).json({
            message: 'Item Deleted Sucessfully'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports.feedback = async (req, res) => {
    try {
        let items = await Item.find({ farmer: req.user._id });
        let items_ids = items.map((item, index) => (item._id));
        let feedbacks = await Feedback.find({ item: { $in: items_ids } }).populate({ path: 'buyer', select: 'first_name phone address -_id' }).populate({ path: 'item', select: 'title price quality image' }).select('-_id -createdAt -updatedAt -__v')
        return res.status(200).json({
            message: 'Feedback Received',
            data: feedbacks
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports.negotiations = async (req, res) => {
    try {
        let negotiation = await Negotiation.find({ farmer: req.user._id }).populate({ path: 'buyer', select: 'first_name phone address -_id' }).populate({ path: 'item', select: 'title price quality image' });
        return res.status(200).json({
            message: 'Data Retrived sucessfully',
            data: negotiation
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}