define('cross/1', function(require, exports, module){
//------------------------------------------------------------

exports.num = function() {
	return m2.num() + m3.num();
};

exports.val = 100;


var m2 = require('cross/2');
var m3 = require('cross/3');

//------------------------------------------------------------
});
