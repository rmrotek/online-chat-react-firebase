import React, { Component } from 'react';
import Message from '../Message/Message';

import firebase from 'firebase';


class Form extends Component {

  state = {
    userName: 'Bob',
    message: '',
    list: [],
  }

  //imports msgs from db
  messageRef = firebase.database().ref().child('messages');
  // listenMessages()

  listenMessages = () => {
    this.messageRef
      .limitToLast(10)
      .on('value', message => {
        this.setState({
          list: Object.values(message.val()),
        }, console.log(this.state.list));
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
          test msg

          { this.state.list.map((item, index) =>
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
      </div>
    )
  }
}



export default Form