export const ADD_USER = 'ADD_USER';
export const ALL_USER = 'ALL_USER';
export const GET_USER = 'GET_USER';
export function listUser(list){
  return {
    type: ALL_USER,
    list
  }
}
export function addUser(value) {
  return {
    type: ADD_USER,
    value
  }
}
export function getUser(value) {
  return {
    type: GET_USER,
    value
  }
}
export function getUserAsync(id){
    return function(dispatch) {
      fetch(`http://localhost:5555/api/${id}`)
      .then(res => res.json())
      .then(json=> dispatch({type: 'GET_USER', newUser: json}))
      .catch(err => console.log(err));
    }
}

export function fetchGetUser(id) {
    return (dispatch) => {
        return fetch(`http://localhost:5555/api/${id}`)
        .then(res => res.json())
        .then(json => dispatch(getUser(json)))
        .catch(err => console.log(err));
    };
};


export function fetchListUser() {
    return (dispatch) => {
        return fetch(`http://localhost:5555/api/list`)
        .then(res => res.json())
        .then(json => dispatch(listUser(json)))
        .catch(err => console.log(err));
    };
};

