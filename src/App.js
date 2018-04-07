//  @flow

import React, { Component } from 'react';
import { YellowBox, View, StatusBar } from 'react-native';

import Navigator from './Navigator';
import { ROUTE_NAMES } from './utils/constants';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

type Props = {};

type State = {
  initialRoute: $Values<typeof ROUTE_NAMES>,
};

export default class App extends Component<Props, State> {
  state = {
    initialRoute: ROUTE_NAMES.LOGIN,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#fe6501" barStyle="light-content" />
        <Navigator
          navigationOptions={{ initialRouteName: this.state.initialRoute }}
        />
      </View>
    );
  }
}
