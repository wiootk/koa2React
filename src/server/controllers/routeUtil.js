const Router = require('koa-router')
const router = new Router()
const fs = require('fs');
let addControllers = (router, dir) => {
 dir = dir || '';
 fs.readdirSync(__dirname + '/' + dir).filter((f) => {
     return f.endsWith('.js');
 }).forEach((f) => {
     const model = require(__dirname + '/' + dir + '/' + f);
     if (model.constructor == Router) {
       // constructor 更加精确地指向对象所属的类，而对 instanceof 而言，即使是父类也会返回true
         const modelStr = f.replace(/.js/, '');
         router.use(`/${modelStr}`, model.routes(), model.allowedMethods());
     }
 })
}
addControllers(router);
module.exports = router