import React from 'react';
import ReactDOM from 'react-dom';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return(
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re: Re: React'];
function App(props) {
  return(
    <Mailbox unreadMessages={messages} />
  );
}

export default Mailbox;
