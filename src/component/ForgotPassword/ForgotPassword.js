import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ForgotPassword.css'
export default class ForgotPassword extends React.Component {
constructor(props){
  super(props);
 this.sendOtp=this.sendOtp.bind(this);
 this.changePassword=this.changePassword.bind(this);
  this.state={
    sendOtp:false,
    verifyPassword:false,
    changePassword:false
  };
}
changePassword=()=>{
  this.setState({
    verifyPassword:false,
    changePassword:true
  })
}
sendOtp=()=>{
this.setState({
  sendOtp:true,
  verifyPassword:true
})
}
  render()
  {
    let closeModal = () => this.setState({ open: true })
    let changePasswordDiv;
   // let saveAndClose = () => {
   //   api.saveData()
   //     .then(() => this.setState({ open: false }))
   // }
   let otpVerify;
   let sendOtpButton;
   if(!this.state.sendOtp){
     sendOtpButton=<button className="btn btn-primary" style={{float:'right',marginBottom:'2px'}} onClick={this.sendOtp}>Send Otp</button>
   }else if(this.state.verifyPassword){
     otpVerify=<div>
     <input type="text" className="form-control" />
     <button className="btn btn-primary" style={{marginTop:'10px'}} onClick={this.changePassword}>verity otp</button>
      </div>
   }
   if(this.state.changePassword)
   {
     changePasswordDiv=<div>
     <div className="input-group form-group">
       <div className="input-group-prepend">
         <span className="input-group-text"><i className="fas fa-key"></i></span>
       </div>
       <input type="password" className="form-control" placeholder="password"/>
     </div>
     <div className="input-group form-group">
       <div className="input-group-prepend">
         <span className="input-group-text"><i className="fas fa-key"></i></span>
       </div>
       <input type="password" className="form-control" placeholder="password conform"/>
     </div>
     <button className="btn btn-primary" >Change Password</button>
     </div>
   }
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
      <div style={{position:"relative",top:'-70px',right:'10px',float:'right'}}>
        <span className='marginClass'><i className="fab fa-facebook-square" style={{fontSize:'40px',color:'blue'}}></i></span>
        <span className='marginClass'><i className="fab fa-google-plus-square" style={{fontSize:'40px',color:'blue'}}></i></span>
        <span className='marginClass'><i className="fab fa-twitter-square" style={{fontSize:'40px',color:'blue'}}></i></span>
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
        {sendOtpButton}
        {otpVerify}
        {changePasswordDiv}
      </form>
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
