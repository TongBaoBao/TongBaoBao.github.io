const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlanSchema = new Schema({
	plantype:String,
	humvalue:String,
	illvalue:String,
	tpmvalue:String
})

exports.PlanSchema = PlanSchema
