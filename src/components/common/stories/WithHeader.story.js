import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native-elements';

import WithHeader from '../WithHeader';
import Container from '../Container';

const Component = () => (
  <Container flex={1}>
    <Text>Centered Text wrapped by WithHeader</Text>
  </Container>
);
const Composed = WithHeader()(Component);

storiesOf('WithHeader', module).add('default', () => <Composed />);
