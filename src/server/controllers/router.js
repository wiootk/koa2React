import render from './render'
function router(options) {
    return async (ctx, next) => {
  if (ctx.path.match(/^\/api/)) {
    return await require('./routeUtil.js').routes()(ctx, next)
  }
  	 // await require('./render.js')(ctx, next)  
  	  await render(ctx, next) 
}
}
module.exports = router;






