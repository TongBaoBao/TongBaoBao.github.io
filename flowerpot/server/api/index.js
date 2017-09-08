const Models    = require('../models/index');
const PlanModel = Models.Plan;
const WaterModel = Models.Water;

exports.getPlan = function (req,res,next) {
	PlanModel.find({},(err,doc) => {
		if (err) {
			res.send({state:'0',msg:'failed'})
		} else {
			res.send({state:'1',data:doc})
		}
	})
}

exports.setPlan = function (req,res,next) {
	const { id, plantype, humvalue, illvalue, tpmvalue, key } = req.body;
	//key
	//0: plantype 更改所有
	//1: humvalue
	//2: illvalue
	//3: tpmvalue
	if (key == '1') {
		PlanModel.update({_id:id},{$set:{'humvalue':humvalue}},{upsert : false},(err,doc) => {
			console.log(doc);
			if (err) {
				res.send({state:'0',msg:'failed'})
			} else {
				res.send({state:'1',msg:'success'})
			}
		})
	} else if (key == '2') {
		PlanModel.update({_id:id},{$set:{'illvalue':illvalue}},{upsert : false},(err,doc) => {
			console.log(doc);
			if (err) {
				res.send({state:'0',msg:'failed'})
			} else {
				res.send({state:'1',msg:'success'})
			}
		})
	} else if (key == '3') {
		PlanModel.update({_id:id},{$set:{'tpmvalue':tpmvalue}},{upsert : false},(err,doc) => {
			console.log(doc);
			if (err) {
				res.send({state:'0',msg:'failed'})
			} else {
				res.send({state:'1',msg:'success'})
			}
		})
	} else if (key == '0') {
		PlanModel.update({_id:id},{$set:{'plantype':plantype,'humvalue':humvalue,'illvalue':illvalue,'tpmvalue':tpmvalue}},{upsert : false},(err,doc) => {
			console.log(doc);
			if (err) {
				res.send({state:'0',msg:'failed'})
			} else {
				res.send({state:'1',msg:'success'})
			}
		})
	}
}

exports.getWaterType = function (req,res,next) {
	WaterModel.find({},(err,doc) => {
		if (err) {
			res.send({state:'0',msg:'failed'})
		} else {
			res.send({state:'1',data:doc})
		}
	})
}

exports.setWaterType = function (req,res,next) {
	const { id, type } = req.body;
	if (id == null) {
		new WaterModel({type:type}).save((err,doc) => {
			if (err) {
				res.send({state:'0',msg:'failed'})
			} else {
				res.send({state:'1',msg:'success'})
			}
		})
	} else {
		WaterModel.update({_id:id},{$set:{'type':type}},{upsert : false},(err,doc) => {
			console.log(doc);
			if (err) {
				res.send({state:'0',msg:'failed'})
			} else {
				res.send({state:'1',msg:'success'})
			}
		})
	}
}