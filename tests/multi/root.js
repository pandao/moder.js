define('multi/root', function(require, exports, module){
//------------------------------------------------------------

var m1 = require('multi/1');
var m2 = require('multi/2');


exports.show = function() {
    return m1.num() + m2.num();
};

//------------------------------------------------------------
});
