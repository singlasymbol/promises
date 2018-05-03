var json = process.argv[2]

function parsePromised(json) {
	
	return new Promise(function (fulfill, reject) {
		try {
			var parsedJson = JSON.parse(json);
			fulfill()
		} catch(e) {
			reject(e)
		}
	})
	
}

parsePromised(json).then(null, onReject)

function onReject(e){
	console.log(e.message)
}