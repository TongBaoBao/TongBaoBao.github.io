const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WaterSchema = new Schema({
	type:String
})

exports.WaterSchema = WaterSchema
