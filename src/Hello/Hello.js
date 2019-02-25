import React, { Component } from 'react';
import'./hello.css';
import pic from './pic.jpeg';


class Hello extends Component {
    render() {
    return (
      <div>
        <div>
          <h1>Hoja de vida</h1>
          <header className= "Hello-header">
              <li>Belssy Montana</li>
              <li>BootCamp</li>
              <li>gjkjg</li>
              <li></li>
          </header>
        </div>
        <div className="image">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/51/1b/3f/hotel-le-relais-du-bellay.jpg" height="42" width="42" />
        </div>
          <img src={pic} heigth="120" width="150"/>
      </div>
        
      
      
      
        
      
      
      
        
       
    );
  }
}

export default Hello;