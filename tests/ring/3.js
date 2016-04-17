define('ring/3', function(require, exports, module){
//------------------------------------------------------------

exports.test = function(i) {
	if (i == 0)
		return 1;
	else
    	return c1.test(i-1);
};

var c1 = require('ring/1');

//------------------------------------------------------------
});
