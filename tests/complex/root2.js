define('complex/root2', function(require, exports, module){
	var root1_3 = require('complex/root1-3');
	var rootCommon = require('complex/root1-common');

	module.exports = {
		'root1_3': root1_3,
		'rootCommon': rootCommon
	}
});
