define('async_in_async/second', function(require, exports, module){
//------------------------------------------------------------

exports.setTimeout = function(cb, time) {
	setTimeout(cb, time);
};

//------------------------------------------------------------
});
