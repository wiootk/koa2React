import React from 'react';
import List from './List';
import Input from './Input';
class UserContainer extends React.Component {
 constructor(props){super(props);}
    // 'http://localhost:5555/api/list'
// componentDidMount = () => { 
//     fetch(`http://localhost:5555/api/list`)
//       .then(res => res.json())
//       .then(json=>{
//          let array=[''];
//          for(let i in json){
//             array.push(json[i].name);
//             }
//           this.props.listUser(array);
//       });
//   }

componentDidMount() {
        // if (!this.props.fetchListUser) {//服务端
            this.props.fetchListUser();
        // }
    }

  inputChange = (event) => {
    this.props.addUser(event.target.value)
  }
  listUser = () => {
    // event.preventDefault();
    this.props.listUser();
  };
  addUser = (event) => {
    // event.target.value
    this.props.addUser("555")
  };
  getUser = (i) => {
console.log(6666);

    this.props.getUserAsync(i)
  };
  render(){
    return (
      <div className="row">
         <div className="col-md-10 col-md-offset-1">
            <div className="panel panel-default">
              <div className="panel-body">
                <h1  onClick={this.addUser} >add list</h1>
                <hr/>
                <List listItems={this.props.user.list} onClick={this.addUser} showInfo={this.getUser} />
                <Input value={this.props.user.newUser}  onChange={this.inputChange} onSubmit={this.addUser} />
              </div>
            </div>
          </div>
      </div>
    );
  }
}
export default UserContainer