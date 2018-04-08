// @flow

import * as React from 'react';
import { StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { ROUTE_NAMES, GC_AUTH_TOKEN } from '../../utils/constants';
import Container from '../common/Container';
import WithHeader from '../common/WithHeader';
import TextInput from '../common/TextInput';
import SignMutation from './mutations/SigninMutation';
import CreateUserMutation from './mutations/CreateUserMutation';

type State = {
  isLoading: boolean,
  email: string,
  password: string,
  errorMsg: ?string,
  login: boolean,
  name: string,
};

type Res = any;

class Login extends React.PureComponent<any, State> {
  state = {
    isLoading: false,
    email: '',
    password: '',
    errorMsg: null,
    login: true,
    name: '',
  };

  setValue = (field: 'email' | 'password' | 'name') => (val: string) =>
    this.setState({ [field]: val });

  validateInputs = () => {
    const { email, password, name, login } = this.state;
    const emailPassComplete = email.length && password.length;
    if (login) return emailPassComplete;
    return emailPassComplete && name.length;
  };

  onCompleted = async ({ signinUser }: Res) => {
    if (!signinUser) return this.onError();

    await AsyncStorage.setItem(GC_AUTH_TOKEN, signinUser.token);
    this.props.navigation.navigate(ROUTE_NAMES.LINK_LIST);
  };

  onError = () =>
    this.setState({ isLoading: false, errorMsg: 'Email or password wrong' });

  submit = () => {
    this.setState({ isLoading: true, errorMsg: null });
    const { email, password, login, name } = this.state;
    const vars = {
      clientMutationId: '21',
      email: {
        email,
        password,
      },
    };

    login
      ? SignMutation.commit(vars, this.onCompleted, this.onError)
      : CreateUserMutation.commit(
          { name, email: vars.email },
          this.onCompleted,
          this.onError,
        );
  };

  toggleLogin = () => this.setState(prevState => ({ login: !prevState.login }));

  render() {
    const { name, isLoading, email, password, errorMsg, login } = this.state;
    return (
      <Container flex={1} style={styles.container}>
        {errorMsg && <Text style={{ color: 'red' }}>{errorMsg}</Text>}

        {!login && (
          <TextInput
            value={name}
            onChange={this.setValue('name')}
            style={styles.input}
            placeholder="name"
            iconName="user"
          />
        )}
        <TextInput
          value={email}
          onChange={this.setValue('email')}
          style={styles.input}
          keyboardType="email-address"
          placeholder="email"
          iconName="envelope"
        />
        <TextInput
          value={password}
          onChange={this.setValue('password')}
          placeholder="password"
          secureTextEntry
          iconName="lock"
        />
        <TouchableOpacity onPress={this.toggleLogin}>
          <Text style={{ margin: 20 }}>
            {login ? 'Need to create an account?' : 'Already have an account ?'}
          </Text>
        </TouchableOpacity>
        <Button
          title={login ? 'Login' : 'Sign up'}
          onPress={this.submit}
          disabled={!this.validateInputs()}
          disabledStyle={{ backgroundColor: 'lightgrey' }}
          loading={isLoading}
          loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainer}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  input: {
    marginBottom: 30,
  },
  buttonTitle: {
    fontWeight: '700',
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: 'rgba(92, 99,216, 1)',
    width: 300,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
  },
});

export default WithHeader(false)(Login);
