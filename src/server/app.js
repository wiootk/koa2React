require('babel-polyfill')
var fs = require('fs');  
var babelConfig = JSON.parse(fs.readFileSync('./.babelrc')); 
require('babel-register')(babelConfig);
require('ignore-styles');
//服务器端支持fetch
global.fetch = require('node-fetch');
global.window=global;
global.window.isServer=true;





var Koa=require('koa');
var path=require('path')
var bodyParser = require('koa-bodyparser');
var ejs=require('ejs');
var session = require('koa-session-minimal');
var MysqlStore = require('koa-mysql-session');
var config = require('./config.js');
// var router=require('koa-router')
var views = require('koa-views')
var koaStatic = require('koa-static')
var app=new Koa() 
var cors = require('koa2-cors');   
    app.use(cors());


const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const devMiddleware = require("./middleware/devMiddleware");
const hotMiddleware = require('./middleware/hotMiddleware');

const compiler = webpack(webpackConfig);
app.use(devMiddleware(compiler));
app.use(hotMiddleware(compiler));

// session存储配置
const sessionMysqlConfig= {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}
// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
})) 
// 配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname , '../../static')
)) 
// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './templates'), {
  extension: 'ejs'
})) 
// 使用表单解析中间件
app.use(bodyParser()) 
// 使用新建的路由文件
// app.use(require('https://segmentfault.com/routers.js').routes())
// const router = require('./controllers/routeUtil')
// app.use(router.routes()).use(router.allowedMethods())


const router = require('./controllers/router.js');
app.use(router());






console.log(`server  listening on port ${config.port}`)
// 监听在3000端口
app.listen(config.port)