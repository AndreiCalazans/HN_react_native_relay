//  @flow

import React from 'react';
import { ActivityIndicator } from 'react-native';

import Container from './Container';

const Loading = () => (
  <Container flex={1}>
    <ActivityIndicator size="large" color="#0000ff" />
  </Container>
);

export default Loading;
