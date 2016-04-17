define('async_in_async/first', function(require, exports, module){
//------------------------------------------------------------

exports.load = function(cb) {

	require.async('async_in_async/second', function(mod) {
		mod.setTimeout(cb, 10);
	});

};

//------------------------------------------------------------
});
