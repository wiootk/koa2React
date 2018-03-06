// import { connect } from 'react-redux';
// import InfoComponent from '../components/InfoComponent.js'
// // import {listUser,addUser,getUser} from '../actions/user'
// import {listUser,addUser,getUser,getUserAsync} from '../actions/user'
// function mapStateToProps(state) {
//   return {
//     user: state.user
//   }
// }
// //mapping actions to props
// function mapDispatchToProps(dispatch) {
//   return {  
//     getUser: (i) => dispatch(getUser(i)),
//     getUserAsync:(i)=>dispatch(getUserAsync(i))
//   };
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(InfoComponent);


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InfoComponent from '../components/InfoComponent.js'
import {getUser,getUserAsync,fetchGetUser} from '../actions/user'

function getInitData(dispatch, params) {
    const id = params.id;
    return () => dispatch(fetchGetUser(id));
}

function mapStateToProps(state,ownProps) {
  return {
    user: state.user
  }
}
//mapping actions to props
function mapDispatchToProps(dispatch, ownProps) {
  return {  
    getUser: (i) => dispatch(getUser(i)),
    getUserAsync:(i)=>dispatch(getUserAsync(i)),
    fetchGetUser: getInitData(dispatch, ownProps.match.params),
  };
}
const InfoContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(InfoComponent));
InfoContainer.getInitData = getInitData;
export default InfoContainer;

