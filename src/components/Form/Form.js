import React, { Component } from 'react';
import Message from '../Message/Message';

import firebase from 'firebase';

import './Form.css'


class Form extends Component {


  state = {
    userName: 'Mr PlaceHolder',
    message: '',
    list: [],
  }

  //reference for 'messages' in db
  messageRef = firebase.database().ref().child('messages');

  //imports msgs from db
  componentDidMount() {
    this.listenMessages()
  }


  //when logged in
  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ 'userName': nextProps.user.displayName });
    }
  }


  // listen for 'messages' changes, get last 10, put them in state.list
  listenMessages() {
    this.messageRef
      .limitToLast(10)
      .on('value', message => {
        this.setState({
          list: Object.values(message.val()),
        });
      });
  }

  //for input field
  handleChange = event => {
    this.setState({ message: event.target.value })
  }

  // send msg to <Message /> component
  handleSend = () => {
    // check if there is anything typed
    if (this.state.message) {
      // make new msg item to list it later from array
      var newItem = {
        userName: this.state.userName,
        message: this.state.message
      }
      this.messageRef.push(newItem);
      this.setState({ message: '' })
    }
  }

  // make msg send on ENTER press
  handleKeyPress(event) {
    if (event.key !== 'Enter') return;
    this.handleSend();
  }


  render() {
    return (
      <div className='form'>
        <div className='form-msg-list'>

          {this.state.list.map((item, index) =>
            <Message key={index} message={item} />
          )}
        </div>

        <div className='form-input-row'>
          <input
            className='form-input'
            type='text'
            placeholder='Type message here'
            value={this.state.message}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress.bind(this)}

          />

          <button className='form-msg-send' onClick={this.handleSend}>
            Send
          </button>

        </div>
        <p>Current username: {this.state.userName}</p>
      </div>
    )
  }
}



export default Form