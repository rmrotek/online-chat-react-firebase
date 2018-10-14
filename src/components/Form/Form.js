import React, { Component } from 'react';
import Message from '../Message/Message';

import firebase from 'firebase';


class Form extends Component {

  state = {
    userName: 'Bob',
    message: '',
    list: [],
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
      // TODO send to db
      this.setState({ message: '' })
    }
  }


  render() {
    return (
      <div className='form'>
        <div className='form-msg-list'>
          test msg

          {/* <Message /> */}
        </div>

        <div className='form-input-row'>
          <input
            className='form-input'
            type='text'
            placeholder='Type message here'
            value={this.state.message}
            onChange={this.handleChange}
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