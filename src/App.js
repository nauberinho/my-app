import React, {Component} from 'react';
import Button from "./Button.js";
import Form from "./Form.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.makeStateEmpty = this.makeStateEmpty.bind(this);
  }

  handleInput(event) {
      console.log(this.state.Email)
      let prop = event.target.id;
      let self = this;
      
      switch(prop){
          case 'Name': 
              self.setState({
              Name: event.target.value
              })
              break;
              
          case 'Email':    
              self.setState({
              Email: event.target.value
              })
              break;
      }
    
  }

  makeStateEmpty() {
    this.setState({
      Name: '',
      Email: ''
    });
  }

  render() {
    return (
      <div>
        <Form
        
        name={this.state.Name} email={this.state.Email} handleInput={this.handleInput}
        />
        <Button
          makeStateEmpty={this.makeStateEmpty}
        />
      </div>
    );
  }
}