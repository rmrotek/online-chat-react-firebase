import React, { Component } from 'react';
import Form from '../Form/Form';
import firebase from 'firebase';
import firebaseConfig from '../../firebase/firebase'

// css last
import './App.css';

//init firebase from cfg
firebase.initializeApp(firebaseConfig);




class App extends Component {

  state = {
    user: null,
  }

  // check for login changes
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }


  // handlers for login and logout

  handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  handleLogOut = () => {
    firebase.auth().signOut();
  }





  render() {
    return (
      <div className="app">
        <div className='app-header'>
          <h1>Online chat</h1>
          <h4>React + Firebase</h4>
        </div>

        <div className='app-user-login'>
          <button onClick={this.handleSignIn}>Sign in</button>
          <button onClick={this.handleLogOut}>Logout</button>

        </div>

        <div className='app-main'>
          <Form />

        </div>




      </div>
    );
  }
}

export default App;
