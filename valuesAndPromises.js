function attachTitle(str) {
	return 'DR. ' + str
}

// var promise = new Promise(function(fulfill, reject) { 
// 	fulfill('MANHATTAN');
// })

// promise.then(success, reject);

// function success(str) {
// 	str = attachTitle(str);
// 	console.log(str);
// }

// function reject(str) {
	
// }


Promise.resolve('MANHATTAN').then(attachTitle).then(console.log)