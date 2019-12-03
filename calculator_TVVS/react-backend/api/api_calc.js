
module.exports.calcAdd = function (req, res, next) {
	
	console.log(req.query);
	var a = req.query.a;
	var b = req.query.b;

	var result = {};
	if(isNaN(a + '') || isNaN(b + ''))
	{	
		result = {
			result: "Not a number"
		}
		res.type('json');
		res.send(JSON.stringify(result));
		return result;
	}
	a = parseFloat(a);
	b = parseFloat(b);
	
	result = a + b;
	res.type('json');
	res.send(JSON.stringify({
		result: result
	}));

	return result;
}


module.exports.calcSub = function (req, res, next) {
	console.log(req.query);
	var a = req.query.a;
	var b = req.query.b;

	var result = {};
	if(isNaN(a + '') || isNaN(b + ''))
	{	
		result = {
			result: "Not a number"
		}
		res.type('json');
		res.send(JSON.stringify(result));
		return result;
	}
	a = parseFloat(a);
	b = parseFloat(b);
	
	result = a - b;
	res.type('json');
	res.send(JSON.stringify({
		result: result
	}));

	return result;
	
}

module.exports.calcMul = function (req, res, next) {
	
	console.log(req.query);

	var a = req.query.a;
	var b = req.query.b;

	var result = {};
	if(isNaN(a + '') || isNaN(b + ''))
	{	
		result = {
			result: "Not a number"
		}
		res.type('json');
		res.send(JSON.stringify(result));
		return result;
	}
	a = parseFloat(a);
	b = parseFloat(b);
	
	result = a * b;
	res.type('json');
	res.send(JSON.stringify({
		result: result
	}));

	return result;
}

module.exports.calcDiv = function (req, res, next) {
	console.log(req.query);
	var a = req.query.a;
	var b = req.query.b;

	var result = {};
	if(isNaN(a + '') || isNaN(b + ''))
	{	
		result = {
			result: "Not a number"
		}
		res.type('json');
		res.send(JSON.stringify(result));
		return result;
	}
	a = parseFloat(a);
	b = parseFloat(b);
	
	result = a / b;
	res.type('json');
	res.send(JSON.stringify({
		result: result
	}));

	return result ;
	
}