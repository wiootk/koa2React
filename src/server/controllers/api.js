var router = require('koa-router')();
    const userService = require('./../services/user.js');
    router.get('/list', async function(ctx, next) {
        ctx.response.body = await userService.findAllUser2();
    })
    router.get('/:id', async function(ctx, next) {
        ctx.response.body=  await userService.getUserById(ctx.params.id);
    })
    module.exports = router;