import React from 'react';
import Form from './Form';
import App from './App';
import {shallow, mount} from 'enzyme';

describe('Testing "Form"', () => {
  it('check that component "Form" contains two inputs', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper.find('input')).toHaveLength(2)
  });

  it('see if onChange works', () => {
    const wrapper = mount(<App/>);
    wrapper.setState({Name: 'Niklas', Email: 'nauber91@hotmail.com'});
    expect(wrapper.state('Name')).toBe('Niklas');
    expect(wrapper.state('Email')).toBe('nauber91@hotmail.com');
    wrapper.find('#Name').simulate('change', {target: {value: 'GordonSuger', id: 'Name'}});
    wrapper.find('#Email').simulate('change', {target: {value: 'GordonSuger@DetGorHan.com', id: 'Email'}});
    expect(wrapper.state('Name')).toBe('GordonSuger');
    expect(wrapper.state('Email')).toBe('GordonSuger@DetGorHan.com');
  })
});