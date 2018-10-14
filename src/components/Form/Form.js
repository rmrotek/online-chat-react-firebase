import React, { Component } from 'react';
import Message from '../Message/Message';

import firebase from 'firebase';


class Form extends Component {

  state = {
    userName: 'Bob',
    message: '',
    list: [],
  }


  render() {
    return (
      <div className='form'>
        <div className='form-msg-list'>
          test msg
          
          {/* <Message /> */}
        </div>

        <div className='form-input-row'>
          <input />

          <button>Send</button>

        </div>
      </div>
    )
  }
}



export default Form