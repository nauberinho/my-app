import React, {Component} from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <input id='Name' type="text" className="input-name" placeholder="Niklas"
               onChange={this.props.handleInput} defaultValue={this.props.name}/>
        <input type="text" className="input-email" placeholder="nauber91@hotmail.com" id='Email' onChange={this.props.handleInput} defaultValue={this.props.email}/>
      </form>
    );
  }
}