define('tools/a',function(require,exports,module){
    module.exports = {
        name : 'tools/a'
    }
});

define('tools/b',function(require,exports,module){
    module.exports = {
        name : 'tools/b',
        deps : require('tools/a')
    }
});

define('tools/c',function(require,exports,module){
    module.exports = {
        name : 'tools/c',
        deps : require('tools/b')
    }
});