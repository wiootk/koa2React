// import React, {Component, PropTypes} from 'react';
// import {BrowserRouter, Route, Link} from 'react-router-dom'
// import UserContainer from './containers/userContainer';
// import InfoContainer from './containers/InfoContainer.js';
// // var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
// const Links = () => (
//           <ul className="nav">
//               <li style={{'float':'left','listStyle':'none'}}><Link to="/">列表</Link></li>  
//               <li style={{'float':'left','listStyle':'none'}}><Link to={{pathname: '/info'}}>详情</Link> </li> 
//               <li style={{'float':'left','listStyle':'none'}}> <Link replace to="/contact">Contact</Link> </li>          
//             </ul>  
// )
// const route = () => (
//   <BrowserRouter>
//     <div className="contentBox"> 
//       <Links />      
//       <Route exact path="/" component={UserContainer} />
//       <Route path="/info/:id?" component={InfoContainer} />
//       <Route path="/contact" render={() => <h1>Contact</h1>} />      
//     </div>
//   </BrowserRouter>
// )
//  export default route;




import React, {Component, PropTypes} from 'react';
import {BrowserRouter, Route, Link, Redirect,StaticRouter} from 'react-router-dom'
import UserContainer from './containers/userContainer';
import InfoContainer from './containers/InfoContainer.js';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore(window.__INITIAL_STATE__);
export const config = [
    { exact: true, path: '/', component: UserContainer },
    { exact: true, path: '/info/:id', component: InfoContainer },
     { exact: true, path: '/contact',  render: () => <h1>Contact</h1> },
];
const Links = () => (
          <ul className="nav">
              <li style={{'float':'left','listStyle':'none'}}><Link to="/">列表</Link></li>  
              <li style={{'float':'left','listStyle':'none'}}><Link to={{pathname: '/info'}}>详情</Link> </li> 
              <li style={{'float':'left','listStyle':'none'}}> <Link replace to="/contact">Contact</Link> </li>          
            </ul>  
)
export const Routes = (props) =>{
const Router =window.isServer ? StaticRouter: BrowserRouter;
return (
<Provider store={props.store}> 
  <Router location={props.location} context={props.context}>
    <div className="contentBox"> 
      <Links />      
      {  config.map((item, index) => (<Route key={index} {...item} />)) }   
        
    </div>
  </Router>
  </Provider>
)
}






