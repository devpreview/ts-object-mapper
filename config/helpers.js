const path = require('path');
const _root = path.resolve(__dirname, '..');

module.exports = {
    root: function (args) {
        args = Array.prototype.slice.call(arguments, 0);
        return path.join.apply(path, [_root].concat(args));
    },

    libVersion: require("./../package.json").version
};