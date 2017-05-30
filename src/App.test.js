import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';
import Button from './Button';
import {shallow} from 'enzyme';

describe('testing app', () => {
  it('the app renders without crashing', () => {
    var div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('Does my app contain the required amount of components?', () => {
    var wrapper = shallow(<App/>);
    expect(wrapper.contains(<Form/>, <Button/>))
  })
});             
                    