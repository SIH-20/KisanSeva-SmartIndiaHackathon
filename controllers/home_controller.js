const Message = require('../models/message');
const Item = require('../models/item');
const Sms = require('../models/sms');
const Order = require('../models/Order');
const Category = require('../models/Category')

module.exports.home = (req, res) => {
	return res.render('index', {
		layout: "mainLayout"
	})
}

module.exports.ecommerce = async (req, res) => {
	var categories = await Category.find({}).populate({ path: 'items', perDocumentLimit: 1 });
	let vegetables = [];
	let fruits = [];
	let cereals = [];
	for (category in categories) {
		let item = categories[category].items[0];
		if (item.type == 'vegetable') {
			vegetables.push(item);
		} else if (item.type == 'fruit') {
			fruits.push(item);
		} else {
			cereals.push(item);
		}
	}
	return res.render('ecommerce-index', {
		title: 'SIH | Home',
		vegetables: vegetables,
		fruits: fruits,
		cereals: cereals,
		active: 'home'
	});
}

module.exports.shop = async (req, res) => {
	try {
		let items = [];
		items = await Item.find({ type: req.query.type });
		return res.render('shop', {
			title: 'Shop Items',
			items: items
		})
	} catch (err) {
		console.log(err);
	}
}

module.exports.fetchMessages = async (req, res) => {
	try {
		let messages = await Message.find({
			$or: [
				{ $and: [{ sender: req.user._id }, { receiver: req.params.id }] },
				{ $and: [{ sender: req.params._id }, { receiver: req.user._id }] }
			]
		});
		return res.json()
	} catch (err) {

	}
}
module.exports.upload_form = (req, res) => {
	return res.render('_item-upload', {
		title: "upload"
	});
}


module.exports.contact = (req, res) => {
	return res.render('contact', {
		title: 'SIH | Contact'
	});
}

module.exports.sms = async (req, res) => {
	let name = req.body.firstname + " " + req.body.lastname;
	console.log(req.body);
	let newSms = await Sms.create({
		content: req.body.content,
		senderNumber: req.body.sender,
		senderName: name
	});
	return;
}
module.exports.showSms = async (req, res) => {
	let sms = await Sms.find({});
	if (sms) {
		return res.status(200).json({
			message: "item Successfully uploaded",
			data: {
				sms: sms
			}
		});
	}
}

module.exports.allOrders = async (req, res) => {
	orders = await Order.find({ buyer: req.user.id }).populate({
		path: 'orderQuantity',
		populate: {
			path: 'item'
		}
	})
	items_list = []
	for (order in orders) {
		items = orders[order].orderQuantity
		for (item in items) {
			currItem = items[item]
			items_list.push({
				id: currItem.item._id,
				name: currItem.item.title,
				price: currItem.item.price,
				image: currItem.item.image,
				quantity: currItem.quantity
			})
		}
	}
	return res.render('order_profile', {
		items: items_list
	});
}

module.exports.search = async (req, res) => {
	let keywords = req.body.query.split(" ");
	let categories = "premiumeliteclassic"
	if (keywords.length < 2) {

		let value = keywords[0];

		let pattern = new RegExp(value, 'i');

		if (categories.match(pattern)) {
			let items = await Item.find({

				category: pattern
			}).populate('farmer');
			return res.render('search_results', {
				items: items
			})

		} else {

			let items = await Item.find({

				title: pattern
			}).populate('farmer');
			return res.render('search_results', {
				items: items
			})
		}

	} else {
		let firstP = new RegExp(keywords[0], 'i');
		let secondP = new RegExp(keywords[1], 'i');

		let categoryP = categories.match(firstP) ? firstP : secondP;
		let itemP = categories.match(firstP) ? secondP : firstP;
		let items = await Item.find({
			title: itemP,
			category: categoryP,
		}).populate('farmer');
		return res.render('search_results', {
			items: items
		})
	}
}

module.exports.logistics = (req, res) => {
	return res.render("logistics", {
		active: "logistics"
	});
}

module.exports.team = (req, res) => {
	return res.render('team', {
		layout: 'team-layout'
	});
}