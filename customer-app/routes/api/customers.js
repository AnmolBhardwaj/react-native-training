var express = require('express');
var router = express.Router();
var customerService = require('../../services/customer-service');

router.get('/', function(req, res, next) {
  res.send(customerService.getCustomers());
});

router.get('/search/:fieldName/:searchWord', function(req, res, next) {
  res.send(customerService.searchCustomer(req.params.fieldName,req.params.searchWord));
});

router.post('/', function(req, res, next) {
	let customer = req.body;
	customerService.addCustomer(customer);
	res.send({result:'success',msg:'customer added successfully'});
});

router.put('/', function(req, res, next) {
	let customer = req.body;
	customerService.updateCustomer(customer);
	res.send({result:'success',msg:'customer updated successfully'});
});

router.delete('/:id', function(req, res, next) {
	customerService.deleteCustomer(req.params.id);
	res.send({result:'success',msg:'customer deleted successfully'});
});

module.exports = router;
