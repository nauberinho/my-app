import React, {Component} from 'react';

export default class Button extends Component {
  render() {
    return (
      <button id='makeStateEmpty' type="button" className="buttonClass"
              onClick={this.props.makeStateEmpty}>Make state Empty</button>
    );
  }
}