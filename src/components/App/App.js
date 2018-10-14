import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'


class App extends Component {

  state = {
    user: null,
  }



  render() {
    return (
      <div className="app">
        <div className='app-header'>
          <h1>Online chat</h1>
          <h4>React + Firebase</h4>
        </div>

        <div className='app-user-login'>
          <button>Sign in</button>
          <button>Logout</button>

        </div>

        <div className='app-main'>
          <Form />

        </div>




      </div>
    );
  }
}

export default App;
