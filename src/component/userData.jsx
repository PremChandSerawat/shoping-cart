import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
class UserData extends Component {
  constructor() {
    super();
    this.state={
      "userName":'demo Name',
      "id":"id=0"
    }
this.onClickHandler=this.onClickHandler.bind(this);
  }

  onClickHandler(){
    axios.get("http://localhost:3000/user").then(response=>{
      console.log("web service is called");
      console.log("response id  is");
      console.log("response id  is",response);
      console.log("response id  is",response.data[0].id);
      this.setState({id:response.data[0].id});
      this.setState({userName:response.data[0].name});
      window.caches.open("cache-v1").then(cache=>{cache.add(response);});
      console.log("response in save in cache")
    }).catch(function(){
      console.log("cache block");
      window.caches.match("http://localhost:3000/user").then(cache=>{
        console.log(cache);
      }).then(property=>{
        console.log(property);
        this.setState({id:property.data[0].id});
        this.setState({userName:property.data[0].name});
      });
    })
  }
  render(){
    return(
<div>
<Button outline color="primary" onClick={()=>this.onClickHandler()}>click Here</Button>
<p>id : {this.state.id}</p>
<p>name : {this.state.userName}</p>
</div>


    );
  }
}
export default UserData;
