import React from 'react';
import PropTypes from 'prop-types';
import cliqz from '../cliqz';
import { messageShowSignal, messageClickSignal, messageCloseSignal, messageSkipSignal } from '../services/telemetry/top-messages';

export default class TopMessages extends React.Component {
  componentDidMount() {
    if (this.props.messages.length > 0) {
      // Send show signal for the visible message (i.e the first one)
      const message = this.props.messages[0];
      messageShowSignal(message.id);
    }
  }

  handleCTAClick(message) {
    messageClickSignal(message.id);
    cliqz.freshtab.countMessageClick(message);
    this.props.handleLinkClick(message);
  }

  handleLaterClick(message) {
    messageSkipSignal(message.id);
    cliqz.freshtab.skipMessage(message);
  }

  handleCloseClick(message) {
    const messageId = message.id;
    const handler = message.handler;
    messageCloseSignal(messageId);
    cliqz.freshtab.dismissMessage(messageId, handler);
    cliqz.storage.setState((prevState) => {
      const prev = prevState;
      const messages = {
        ...prev.messages,
      };
      delete messages[messageId];
      return {
        messages,
      };
    });
  }

  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div id="topNotificationBox">
        {
          this.props.messages.map(message =>
            (<div
              key={message.id}
              className={`top-notification-box ${message.type}`}
            >
              <div
                className="close"
                onClick={() => this.handleCloseClick(message)}
              />
              <div className="content">
                <div>
                  <h1
                    title={message.title}
                    style={{
                      backgroundImage: `url(${message.icon})`,
                      paddingLeft: message.icon ? '40px' : '0px'
                    }}
                  >
                    {message.title}
                  </h1>
                </div>
                <div>
                  <button
                    className="cta-btn"
                    tabIndex="-1"
                    onClick={() => this.handleCTAClick(message)}
                  >
                    {message.cta_text}
                  </button>
                  {message.later_text &&
                  <button
                    className="later-btn"
                    tabIndex="-1"
                    onClick={() => this.handleLaterClick(message)}
                  >
                    {message.later_text}
                  </button>
                  }
                </div>
              </div>
            </div>)
          )
        }
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

TopMessages.propTypes = {
  messages: PropTypes.shape({
    title: PropTypes.string,
    map: PropTypes.func
  }),
  handleLinkClick: PropTypes.func
};
