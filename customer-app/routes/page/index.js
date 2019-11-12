var express = require('express');
var router = express.Router();
var customerService = require('../../services/customer-service');

router.get('/customers', function(req, res, next) {
  res.render('customers', { title: 'Customers', data:customerService.getCustomers()});
});

router.get('/customers/search/:field/:keyword', function(req, res, next) {
  res.render('customers', { title: 'Customers', data:customerService.searchCustomer(req.params.field,req.params.keyword)});
});

router.get('/customers/add', function(req, res, next) {
  res.render('add-customer', { title: 'Add Customer'});
});

router.get('/customers/edit/:id', function(req, res, next) {
  res.render('edit-customer', { title: 'Update Customer',customer:customerService.getCustomerById(req.params.id)});
});


router.get('/', function(req, res, next) {
 res.redirect('/login');
  //res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'Aboutus' });
});

module.exports = router;
