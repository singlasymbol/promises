require("es6-promise")

var promise = new Promise(function(fulfill, reject){
	fulfill('I FIRED');
	reject(new Error('I DID NOT FIRE'));
});

promise.then(success, reject);

function success(data) {
	console.log(data)
}

function reject(error) {
	console.log(error)
}