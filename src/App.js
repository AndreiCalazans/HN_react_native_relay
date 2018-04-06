//  @flow

import React, { Component } from 'react';
import { Text } from 'react-native-elements';

import Container from './components/common/Container';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container flex={1}>
        <Text>HackerNews React Native App</Text>
      </Container>
    );
  }
}

