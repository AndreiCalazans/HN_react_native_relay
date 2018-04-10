import * as React from 'react';
import { storiesOf } from '@storybook/react-native';

import TextInput from '../TextInput';
import Container from '../Container';

class Decorator extends React.Component {
  state = {
    value: '',
  };

  render() {
    return (
      <Container flex={1}>
        <TextInput
          value={this.state.value}
          onChange={value => this.setState({ value })}
          placeholder="placeholder"
          iconName="user"
        />
      </Container>
    );
  }
}

storiesOf('TextInput', module).add('default', () => <Decorator />);
