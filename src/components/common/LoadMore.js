//  @flow

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import Container from './Container';

type Props = {
  handleLoadMore: () => any,
};

const LoadMore = ({ handleLoadMore }: Props) => (
  <TouchableOpacity
    style={{ backgroundColor: 'white' }}
    onPress={handleLoadMore}
  >
    <Container direction="row" style={{ height: 60 }}>
      <Text style={{ margin: 10 }}>Load more</Text>
      <Icon type="font-awesome" name="plus" color="black" />
    </Container>
  </TouchableOpacity>
);

export default LoadMore;
