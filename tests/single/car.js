define('single/car', function(require, exports, module){
//------------------------------------------------------------

var engine = require('single/engine');

exports.run = function(speed) {
    return engine.start(speed);
};



//------------------------------------------------------------
});
