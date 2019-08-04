import React from 'react';
import Message from 'components/Message';
import './Chat.css';

export default class Chat extends React.Component {
  state = {
    messageInput: '',
    messages: []
  };

  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = e => {
    if (e.key !== 'Enter') {
      return;
    }
    this.setState({
      messageInput: '',
      messages: [{ text: this.state.messageInput }]
    });
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => (
              <Message text={message.text} key={index} />
            ))}
          </div>
        </div>
        <input
          type="text"
          className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}
