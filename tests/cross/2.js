define('cross/2', function(require, exports, module){
//------------------------------------------------------------

exports.num = function() {
	return m1.val + m3.val;  // 400
};

exports.val = 200;


var m1 = require('cross/1');
var m3 = require('cross/3');

//------------------------------------------------------------
});
