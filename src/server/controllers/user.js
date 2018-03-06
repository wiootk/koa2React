var router = require('koa-router')();
const userService = require('./../services/user.js');
router.get('/:id', async function(ctx, next) {
 let userInfo =await userService.getUserById(ctx.params.id);
 await ctx.render('user', { 'user': userInfo })     
})
router.post('/save', async function(ctx, next) { 
let userInfo = await userService.insertUser(ctx.request.body);
 let userList =await userService.findAllUser();
 console.log(userList);
 let html = '<html><body>' +
     '<div> userList:&nbsp;<br/>' + userList + '</div>' +
     '</body></html>';
 ctx.response.type = 'text/html';
 ctx.response.body = html;
})
module.exports = router;