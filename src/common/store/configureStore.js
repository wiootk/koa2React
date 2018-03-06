// import { createStore, applyMiddleware, combineReducers } from 'redux';
// // createStore 初始化store的函数, applyMiddleware 添加中间件,combineReducers把多个reducers合并为单一实体
// import { createLogger } from 'redux-logger';
// import user from '../reducers/user';

// const reducer = combineReducers({ user});
// const loggerMiddleware = createLogger();
// const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore); 
// const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
// export default configureStore;



import { createStore, applyMiddleware, combineReducers } from 'redux';
// createStore 初始化store的函数, applyMiddleware 添加中间件,combineReducers把多个reducers合并为单一实体
import { createLogger } from 'redux-logger';
import user from '../reducers/user';
import thunk from 'redux-thunk';

const reducer = combineReducers({ user});
const loggerMiddleware = createLogger();
//const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore); 
const createStoreWithMiddleware = applyMiddleware( loggerMiddleware,thunk)(createStore); 
const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
