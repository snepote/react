import React from 'react';
import ReactDOM from 'react-dom';

function UserGreetings(props) {
  return <h2>Welcome back!</h2>;
}

function GuestGreetings(props) {
  return <h2>Please sign in</h2>;
}

function Greetings(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreetings />;
  } else {
    return <GuestGreetings />;
  }
}

function LoginButton(props) {
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return(
      <div>
        <Greetings isLoggedIn={isLoggedIn} />
        <h2>The user is <b>{isLoggedIn ? 'logged in' : 'logged out'}</b>.</h2>
        {isLoggedIn ?
          <LogoutButton onClick={this.handleLogoutClick} /> :
          <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    );
  }
}

export default LoginControl;
