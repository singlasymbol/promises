'use strict';

var promise;

promise = Promise.reject(new Error('REJECTED!'));

promise.catch(function(error) {
	console.log(error.message);
});
