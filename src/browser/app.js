// // import {render} from 'react-dom';
// import ReactDOM from 'react-dom';
// import React from 'react'
// const List = (props) => { 
// const list = props.listItems.map((el,i)=>(
//     /*<li key={i} onClick={props.onClick.bind(null, i)}><h2>{el}</h2></li>*/
//     <li key={i} onClick={() => props.onClick(i)}><h2>{el}</h2></li>
//   ));
//    return (<div><ul> { list }</ul></div>)
//  };
// class App extends React.Component {
//   componentWillMount(){
//      this.setState({list: ['thing1', 'thing2', 'thing3']})
//    };
// addList = (i) => {
//   // event.target.value
//   this.setState((state)=>({list: [...state.list,'thing4' ]})) 
// };
// render(){ 
//      return(
//        <div className="row">
//    <div className="col-md-10 col-md-offset-1">
//        <div className="panel panel-default">
//            <div className="panel-body">
//             <h1  onClick={this.addList} >add list</h1>
//            <hr/>
//              <List listItems={this.state.list} onClick={this.addList} />
//            </div>
//        </div>
//    </div>
//    </div>
//      );
//    }
//  }
//  ReactDOM.render(<App/>, document.getElementById('app'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import UserContainer from '../common/containers/userContainer';
// import configureStore from '../common/store/configureStore';
// import Route from '../common/router' //路由配置
// const store = configureStore();
// // <Provider store={store}>        
// //   <UserContainer />
// // </Provider>
// class App extends React.Component {
//   render(){
//     return(
//       <Provider store={store}> 
//       <Route/> 
//       </Provider>
//     );
//   }
// }
// ReactDOM.render(<App/>, document.getElementById('app'));
// // 热替换HMR，需要加入这段代码才会进行生效
// if(module.hot)
//     module.hot.accept();


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import UserContainer from '../common/containers/userContainer';
import configureStore from '../common/store/configureStore';
import {Routes} from '../common/router' //路由配置
const store = configureStore(window.__INITIAL_STATE__);
if (window.isServer) {
    ReactDOM.hydrate(<Routes store={store} />, document.getElementById('app'));
} else {
    ReactDOM.render(<Routes store={store} />, document.getElementById('app'));
}
// 热替换HMR，需要加入这段代码才会进行生效
if(module.hot)
    module.hot.accept();