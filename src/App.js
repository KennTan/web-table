import React, { Component } from 'react';
import './Components/GetUser.js';
import './Components/Layout.js';
import './App.css';
import GetUser from './Components/GetUser.js';
import Layout from './Components/Layout.js';

class App extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Layout/>
        <GetUser/>
      </div>
    )
  }
} 

export default App
