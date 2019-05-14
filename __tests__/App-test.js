/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

// Note: this is just for use with Jest snapshot testing
// and comes packaged with react-native init project.
// You do not need this if using Enzyme 'toMatchSnapshot' etc.
import renderer from 'react-test-renderer';

// This test just uses Jest snapshot testing
it('renders correctly, test using Jest', () => {
  renderer.create(<App />);
});


// Using Jest + Enzyme
describe('<App />', () => {
  it('renders correctly, test using Jest + Enzyme', () => {
    expect(shallow(<App/>)).toMatchSnapshot();
  });
});