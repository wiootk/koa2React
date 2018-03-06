
const webpackBase = require('../common/webpack.base');
const rootDir = process.cwd();
const plugins =Object.assign({}, webpackBase.plugins) ;
module.exports =Object.assign({}, webpackBase,{ entry: __dirname + '/app.js',plugins:plugins})



