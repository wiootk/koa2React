import {ADD_USER,ALL_USER,GET_USER} from '../actions/user'
const initialState = {
  list:  ['thing1', 'thing2', 'thing3'],
  newUser:"名字1"
};
export default function reducer(state = initialState, action){
  switch (action.type){
  case ADD_USER:
    return Object.assign({},state,
      {list: [...state.list, action.value]}
    );
  case ALL_USER:
         let array=[''];
         for(let i in action.list){
            array.push(action.list[i].name);
            }
    return  Object.assign({},state,  {list: array}   );  
  case GET_USER:
    return Object.assign({}, state,  action.value);
    // return Object.assign({}, state, {newUser: action.newUser}); 
  default:
    return state;
  }
}
