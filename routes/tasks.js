var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://127.0.0.1:27017/mytasklist',['tasks']);

//get all tasks
router.get('/tasks',function(req,res,next){
	db.tasks.find(function(err,tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});

//get a single task
router.get('/task/:id',function(req,res,next){
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});

module.exports = router;