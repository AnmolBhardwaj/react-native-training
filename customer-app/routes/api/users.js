var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
	console.log("username:"+req.body.username);
  if(req.body.username === req.body.password){
  	res.send({result:'success',msg:'login successful'});
  }else{
  	res.send({result:'fail',msg:'login failed'});
  }
});

module.exports = router;
