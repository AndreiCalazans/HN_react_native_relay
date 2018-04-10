import * as React from 'react';
import { storiesOf } from '@storybook/react-native';

import LoadMore from '../LoadMore';
import Container from '../Container';

storiesOf('LoadMore', module)
  .addDecorator(story => <Container flex={1}>{story()}</Container>)
  .add('default', () => <LoadMore handleLoadMore={() => {}} />);
