import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './LoginForm.css'
export default class LoginForm extends React.Component {

  render()
  {
    let closeModal = () => this.setState(state=>({ open: !state.open }))

   
    return(

      <Modal
       {...this.props}
       size="md"
       aria-labelledby="contained-modal-title-vcenter"
       centered >
       <Modal.Header closeButton className="modelHeader">
         <Modal.Title id="contained-modal-title-vcenter" className="modelHeader">

         </Modal.Title>
       </Modal.Header>
       <Modal.Body>





      <div className="container">
<div>
  <div className="card">
    <div className="card-header">
      <h3>Sign In</h3>
      <div style={{position:'relative',float:'right',top:'-70px'}}>
        <span><i className="fab fa-facebook-square iconStyle"></i></span>
        <span><i className="fab fa-google-plus-square iconStyle" ></i></span>
        <span><i className="fab fa-twitter-square iconStyle" ></i></span>
      </div>
    </div>
    <div className="card-body">
      <form>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
          </div>
          <input type="text" className="form-control" placeholder="username"/>

        </div>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-key"></i></span>
          </div>
          <input type="password" className="form-control" placeholder="password"/>
        </div>
        <div className="row align-items-center remember">
          <input type="checkbox"/><span style={{color:'black'}}>Remember Me</span>
        </div>
        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-primary float-right login_btn"/>
        </div>
      </form>
    </div>
    <div className="card-footer">
      <div className="d-flex justify-content-center links">
        Do not have an account?<a href="#">Sign Up</a>
      </div>
      <div className="d-flex justify-content-center">
        <a href="#" onClick={this.props.forgotPassword}>Forgot your password?</a>
      </div>
    </div>
  </div>
</div>
</div>



</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );}
}
