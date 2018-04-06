//  @flow

import React, { Component } from 'react';
import { YellowBox, View, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';

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
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#fe6501" barStyle="light-content" />
        <Header
          backgroundColor="#fe6501"
          centerComponent={{
            text: 'HACKER NEWS',
            style: { color: 'white', fontWeight: 'bold' },
          }}
        />
        <LinkList />
      </View>
    );
  }
}
