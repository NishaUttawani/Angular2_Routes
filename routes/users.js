var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient();

var url="mongodb://localhost:27017/test";

router.get('/users',function(req,res,err){
  mongo.connect(url, function(err,db){
    if(err)
      console.log("db connect issue");
    else {

      db.collection('userlist').find({}).toArray(function(err,result){
        console.log("Result", result);
        res.send(result);
      });
    }
  })
});


router.post('/users', function(req,res,err){
  var item={
    id:req.body.id,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    dob: req.body.dob
  }
  console.log(item);
  mongo.connect(url, function(err,db){
    if(err)
      console.log("mongo connection issue");
    else {
      console.log("mongo successfully connected");
      db.collection('userlist').insertOne(item, function(err, result){
        res.send(result.ops[0]);
      })
    }
  })
})

router.post('/user', function(req,res,err){
  mongo.connect(url, function(err,db){
    if(err)
      console.log("mongo connection issue");
    else{
      console.log("mongo connected successfully");
      db.collection('userlist').findOne({id:req.body.id}, function(err,result){
        if(res){
          res.send(result);
        }
      })
    }
  })
})

router.post('/edituser', function(req,res,err){
  mongo.connect(url, function(err,db){
    if(err)
      console.log("mongo connnection issue");
    else{
      console.log("mongo connected successfully");
      db.collection('userlist').update({id:req.body.id},
        {
          id:req.body.id,
          name: req.body.name,
          dob:req.body.dob,
          phone: req.body.phone,
          address: req.body.address,
          email: req.body.email
        },
        function(err,result){
          res.send(result);
        }
      )
    }
  })
});

module.exports=router;
