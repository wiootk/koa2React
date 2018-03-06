import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
const List = (props) => {
const list = props.listItems.map((el,i)=>(
    <li key={i} ><h2>{el}<span className="badge"><Link to={`/info/${i}`} params={{id: 12}}>info</Link></span></h2></li>
    // onClick={props.onClick.bind(null, i)}  onClick={() => props.onClick(i)} onClick={() => props.showInfo(i)
  ));
   return (<div><ul> { list }</ul></div>)
 };

 export default List;