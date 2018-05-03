require('es6-promise');


var promise = new Promise(function(fulfill, reject){

	setTimeout(function(){
		reject(new Error('REJECTED!'))
	},300);
})

promise.then(onFulfill, onReject)

function onReject(error) {
	console.log(error.message)
}

function onFulfill(){

}