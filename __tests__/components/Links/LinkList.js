import React from 'react';
import 'react-native';
import TestRenderer from 'react-test-renderer';
import { WithNavigation } from '../../../TestUtils';
import LinkList from '../../../src/components/Links/LinkList';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const delay = value =>
  new Promise(resolve => setTimeout(() => resolve(), value));

describe('<LinkList />', () => {
  const Component = WithNavigation(LinkList);
  const renderer = TestRenderer.create(<Component />);
  it('should render Link List', async () => {
    await delay(3000);
    const rendered = renderer.toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
