import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App';

// supress SwitchContainer error log.
// eslint-disable-next-line
console.error = () => {};

it('renders correctly', () => {
  renderer.create(<App />);
});
