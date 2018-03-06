// import { connect } from 'react-redux';
// import userComponent from '../components/userComponent.js'
// import {listUser,addUser,getUser} from '../actions/user'
// function mapStateToProps(state) {
//   return {
//     user: state.user
//   }
// }
// //mapping actions to props
// function mapDispatchToProps(dispatch) {
//   return {
//     listUser: (list) => dispatch(listUser(list)),
//     addUser: (value) => dispatch(addUser(value)),   
//     getUser: (i) => dispatch(getUser(i))
//   };
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(userComponent);


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import userComponent from '../components/userComponent.js'
import {listUser,addUser,getUser,fetchListUser} from '../actions/user'

function getInitData(dispatch, params) {
    return () => dispatch(fetchListUser());
}
function mapStateToProps(state,ownProps) {
  return {
    user: state.user
  }
}
//mapping actions to props
function mapDispatchToProps(dispatch,ownProps) {
  return {
    listUser: (list) => dispatch(listUser(list)),
    addUser: (value) => dispatch(addUser(value)),   
    getUser: (i) => dispatch(getUser(i)),
    fetchListUser: getInitData(dispatch, ownProps.match.params),
  };
}

const UserContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(userComponent));
UserContainer.getInitData = getInitData;
export default UserContainer;