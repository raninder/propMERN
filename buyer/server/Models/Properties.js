const mongoose = require('mongoose')

const PropertySchema =  new mongoose.Schema({
		task: String,
		cover: String,
		img2:String,
		img3:String,
    location: String,
    category: String,
    price: String,
    type: String,
		walkScore:String,
		bikeScore:String,
		busScore:String,
		bedrooms:Number,
		washrooms:Number,
		area:String,
		pid:Number,
})

//props is a collection in property db in mongodb compass
const PropertyModel = mongoose.model("props", PropertySchema)

module.exports = PropertyModel