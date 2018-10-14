import React, {Component} from 'react';
import './Message.css'


//take userName and message props 

class Message extends Component {
  render() {
    return (
      <div className="message">
                <span className="message-author">
                    {this.props.message.userName}:
                </span>
        {this.props.message.message}
      </div>
    )
  }
}

export default Message;