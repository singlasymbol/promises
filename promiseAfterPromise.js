
var firstPromise = first()

secondPromise = firstPromise.then(function(val){
	return second(val);
})

secondPromise.then(console.log);