import React from 'react';
import List from './List';
import Input from './Input';
class Info extends React.Component {
  constructor(props){
        super(props);
        this.state = {user:{id:'55',name:'initName'}};       
            }
    // 'http://localhost:5555/api/list'
// componentDidMount = () => {
//   let id = this.props.match.params.id
//     fetch(`http://localhost:5555/api/${id}`)
//       .then(res => res.json())
//       .then(json=>{this.setState({user:json   });
//       });
//   }

componentDidMount() {
        // if (!this.props.user) {
            this.props.fetchGetUser();

        // }
    }
  
  render(){
    return (
      <div className="row">
        {console.log(this.props.match.params.id)}
         <div className="col-md-10 col-md-offset-1">
            <div className="panel panel-default">
              <div className="panel-body">
                <h1 >info - {this.props.match.params.id}</h1>
                <hr/>
                组件内：<label>{this.props.user.id}</label> &#12288;<span>{this.props.user.name}</span><br/>
               </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Info;

 // redux： <label>{this.props.user.newUser.id}</label> &#12288;<span onChange={this.inputChange}>{this.props.user.newUser.name}</span>                                  
