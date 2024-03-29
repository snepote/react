import React from 'react';
import ReactDOM from 'react-dom';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Please write an essay about your favourite DOM element'};

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was been submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" className="waves-effect waves-light btn" />
      </form>
    );
  }
}

export default EssayForm;
