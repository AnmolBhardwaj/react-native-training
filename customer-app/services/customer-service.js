var service = {};

let customers =[
{id:1,name:'Vivek',email:'vivek@gmail.com', address:"India",phone:"9876343543"},
{id:2,name:'Shalin',email:'shalin@gmail.com', address:"Bengaluru",phone:"9876347655"},
{id:3,name:'Jasmine',email:'jasmine@gmail.com', address:"Delhi",phone:"9876347655"}
];


service.getCustomers = function(){
	return customers;
}

service.addCustomer = function(customer){
	customer.id = Date.now();
	customers.push(customer);
}

service.deleteCustomer = function(customerId){
	let tempCustomer = [];
	for (var i = 0; i < customers.length; i++) {
		if(customers[i].id != customerId){
			tempCustomer.push(customers[i]);
		}
	}
	customers = tempCustomer;
}

service.updateCustomer = function(customer){
	for (var i = 0; i < customers.length; i++) {
		if(customers[i].id == customer.id){
			customers[i] = customer;
		}
	}
}
service.searchCustomer = function(field,keyword){
	let tempCustomer = [];
	for (var i = 0; i < customers.length; i++) {
		console.log(customers[i][field]);
		console.log(keyword);
		if(customers[i][field].toLowerCase().startsWith(keyword.toLowerCase())){
			tempCustomer.push(customers[i]);
		}
	}
	return tempCustomer;
}

service.getCustomerById = function(customerId){
	let customer = {};
	for (var i = 0; i < customers.length; i++) {
		if(customers[i].id == customerId){
			return customers[i];
		}
	}
	return customer; 
}

module.exports = service;