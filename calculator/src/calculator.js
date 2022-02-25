import React from 'react';
import ReactDOM from 'react-dom';
import './calculator.css';

const Button = ({value, onClick}) => {
  return(
    <button className="button" value={value} onClick={onClick}>
      {value}
    </button>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: [],
      expression: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.validChars = /[0-9|\+|\=|c]/g;
  }

  handleClick(event) {
    const value = event.target.value;
    let newScreen = [...this.state.screen];
    if (value.match(this.validChars)) {
      if (value === 'c') {
        this.setState({screen: []});
      } else if (value === '+' && this.state.expression != null ) {
        console.log('sum');
      } else {
        newScreen.push(value);
        console.log(newScreen);
        this.setState({
          screen: newScreen,
          expression: Number(newScreen.join(''))
        });
      }
    }
    event.preventDefault();
  }

  renderButton(value) {
    return <Button value={value} onClick={(event) => this.handleClick(event)} />;
  }

  render() {
    return(
      <div>
        <h1>The calculator!</h1>
        <div className="row">
          <div key="screen" className="screen">{this.state.screen.join('')}</div>
        </div>
        <div className="column">
          <div className="row">
            {this.renderButton(1)}
            {this.renderButton(2)}
            {this.renderButton(3)}
          </div>
          <div className="row">
            {this.renderButton(4)}
            {this.renderButton(5)}
            {this.renderButton(6)}
          </div>
          <div className="row">
            {this.renderButton(7)}
            {this.renderButton(8)}
            {this.renderButton(9)}
          </div>
          <div className="row">
            {this.renderButton(0)}
          </div>
        </div>
        <div className="column">
          {this.renderButton('c')}
          {this.renderButton('+')}
          {this.renderButton('=')}
        </div>
      </div>
    );
  }
}

export default Calculator;
