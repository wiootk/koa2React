const webpack = require("webpack");
const webpackBase = require('../common/webpack.base');
const rootDir = process.cwd();
const plugins =webpackBase.plugins;
plugins.push(new webpack.HotModuleReplacementPlugin());
const serverConfig={
 entry: {
app:["webpack-hot-middleware/client?noInfo=true&reload=true",rootDir + '/src/browser/app.js']
},
plugins:plugins
}
module.exports =Object.assign({}, webpackBase,serverConfig)
