//  @flow
import React from 'react';
import { Text } from 'react-native-elements';
import Container from './Container';

import { timeDifferenceForDate } from '../../utils/fns';

type Props = {
  voteCount: number,
  author: ?string,
  date: Date,
};

const LinkDescription = ({ voteCount, author, date }: Props) => (
  <Container
    justify="flex-start"
    direction="row"
    style={{ marginLeft: 10, height: 30 }}
  >
    <Text>{voteCount} votes | </Text>
    {author && <Text>by {author} | </Text>}
    <Text>{timeDifferenceForDate(date)}</Text>
  </Container>
);

export default LinkDescription;
