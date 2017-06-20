var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient();

var url="mongodb://localhost:27017/test";

router.get('/billers',function(req,res,err){
  mongo.connect(url, function(err,db){
    if(err)
      console.log("db connect issue");
    else {

      db.collection('billerlist').find({}).toArray(function(err,result){
        console.log("Result", result);
        res.send(result);
      });
    }
  })
});


router.post('/billers', function(req,res,err){
  var item={
    id:req.body.id,
    billerName: req.body.billerName,
    billerType: req.body.billerType,
    officeAddress: req.body.officeAddress
  }
  console.log(item);
  mongo.connect(url, function(err,db){
    if(err)
      console.log("mongo connection issue");
    else {
      console.log("mongo successfully connected");
      db.collection('billerlist').insertOne(item, function(err, result){
        res.send(result.ops[0]);
      })
    }
  })
});

router.post('/biller', function(req,res,err){
  mongo.connect(url, function(err,db){
    if(err)
      console.log("mongo connection issue");
    else{
      console.log("mongo connected successfully");
      db.collection('billerlist').findOne({id:req.body.id}, function(err,result){
        if(res){
          res.send(result);
        }
      })
    }
  })
})

router.post('/editbiller', function(req,res,err){
  mongo.connect(url, function(err,db){
    if(err)
      console.log("mongo connnection issue");
    else{
      console.log("mongo connected successfully");
      db.collection('billerlist').update({id:req.body.id},
        {
          id:req.body.id,
          billerName: req.body.billerName,
          billerType: req.body.billerType,
          officeAddress: req.body.officeAddress
        },
        function(err,result){
          res.send(result);
        }
      )
    }
  })
});

module.exports=router;
