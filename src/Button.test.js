import React from 'react';
import Button from './Button';
import {shallow, mount} from 'enzyme';
import App from './App';

describe('button tests', () => {
  it('check that a button exists with the right classname', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper.find('.buttonClass').hasClass('buttonClass')).toBe(true);
  });

  it('simulate click on the button and check if the state of the App component is empty', () => {
    const wrapper = mount(<App/>);
    wrapper.setState({inputName: 'test', inputEmail: 'testing@testing.se'});
    expect(wrapper.state('Name')).toBe('');
    expect(wrapper.state('Email')).toBe('');
    wrapper.find('#makeStateEmpty').simulate('click');
    expect(wrapper.state('Name')).toBe('');
    expect(wrapper.state('Email')).toBe('');
  })
});