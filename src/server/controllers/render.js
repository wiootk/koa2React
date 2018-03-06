import {renderToString } from 'react-dom/server'
import configureStore from '../../common/store/configureStore'
import React from 'react';
import {config,App,Routes } from '../../common/router.js'
const matchPath = require('react-router-dom').matchPath;

export default async (ctx, next, renderProps) => {
    // 简单解决node-fetch host问题
    // app.locals.host = req.headers.host;
    // store必须是fresh的，以避免前后请求间的干扰
    const store = configureStore();
    const context = {};
    // 包含一个请求
    const promises = []
    //some() 方法用于检测数组中的元素是否满足指定条件
    //为`<Switch>`选择第一个匹配行为
    config.some(route => {       
        const match = matchPath(ctx.request.url, route);
        // console.log('match', match);
        if (match) {
            // 初始化数据，改变路由
            promises.push(route.component.getInitData(store.dispatch, match.params)());
        }
        return match;
    });
    await  Promise.all(promises).then(data => {
        const html = renderToString(React.createElement(Routes, {
            store:store,
            location:ctx.request.url,
            context:context,
        }));
        return html;        
    }).then(html => {
        console.log(html);
        const reduxState = store.getState();
        return  ctx.render('index', { html: html, reduxState: JSON.stringify(reduxState) });
    });  
}
