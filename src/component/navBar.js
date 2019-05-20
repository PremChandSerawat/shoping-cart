import React from 'react';
import './fixWidth.css';
export default class NavBarRender extends React.Component{
  render(){
    return(
      <header className='toolbar'>
      <nav >
      <h3>ReactApp</h3>
      <a href="home">Home</a>
      <a href="home">Contect</a>
      <a href="home">Help</a>
      <a href="home">Complain</a>
      <form>
      <div className="input-group">
     <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Button</button>
      </div>
      </div>
      </form>
      </nav>
      </header>
    );
  }
}
