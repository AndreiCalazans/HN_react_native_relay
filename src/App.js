//  @flow

import React, { Component } from 'react';
import { YellowBox, View } from 'react-native';

import LinkList from './components/Links/LinkList';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <LinkList />
      </View>
    );
  }
}
