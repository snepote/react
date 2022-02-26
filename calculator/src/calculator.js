import React from 'react';
import ReactDOM from 'react-dom';
import './calculator.css';

const Button = ({value, onClick, display}) => {
  return(
    <button className="button" value={value} onClick={onClick}>
      {display}
    </button>
  );
}

const isOperand = value =>  Number(value) === parseFloat(value);

const isOperator = value => ['+', '-', '*', '/'].includes(value);

const isEqual = value => value === '=';

function calculate(a, operator, b) {
    switch(operator) {
      case '+':
        return a + b;
        break;
      case '-':
        return a - b;
        break;
      case '*':
        return a * b;
        break;
      case '/':
        return a / b;
        break;
      default:
        throw 'The operator ' + operator + ' is not supported';
    }
  }

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: '',
      expression: {
        operandOne: 0,
        operandTwo: 0
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    const value = event.target.value;
    const state = {...this.state};
    const operandOne = this.state.expression.operandOne;

    if (isOperand(value)) {
      const newOperand = Number(operandOne.toString() + value.toString());
      const expression = {...state.expression, operandOne: newOperand};
      this.setState({
        screen: newOperand,
        expression: expression
      });
    } else if (isOperator(value)) {
      const expression = {
        operandOne: 0,
        operator: value,
        operandTwo: state.expression.operandOne
      };
      this.setState({
        screen: value,
        expression: expression
      });
    } else if (isEqual(value)) {
      const expression = state.expression;
      if (expression.operator === null) return;

      const result = calculate(
        expression.operandTwo,
        expression.operator,
        expression.operandOne
      );

      this.setState({
        screen: result,
        expression: {
          operandOne: result,
          operator: null
        }
      });

    } else if (value === 'c') {
      this.setState({
        screen: '',
        expression: {
          operandOne: 0,
          operandTwo: 0
        }
      });
    }

    event.preventDefault();
  }

  renderButton(value, display = null) {
    if (display === null) {display = value;}
    return <Button value={value} display={display} onClick={(event) => this.handleClick(event)} />;
  }

  render() {
    return(
      <div>
        <h1>The calculator!</h1>
        <div className="row">
          <div key="screen" className="screen">{this.state.screen}</div>
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
            {this.renderButton('.')}
          </div>
        </div>
        <div className="column operator">
          {this.renderButton('c')}
          {this.renderButton('/', '÷')}
          {this.renderButton('*', 'x')}
          {this.renderButton('-')}
          {this.renderButton('+')}
          {this.renderButton('=')}
        </div>
      </div>
    );
  }
}

export default Calculator;
