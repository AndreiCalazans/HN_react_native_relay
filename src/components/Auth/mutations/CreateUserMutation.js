//  @flow

import { commitMutation, graphql } from 'react-relay';
import environment from '../../../utils/Environment';

const mutation = graphql`
  mutation CreateUserMutation(
    $createUserInput: SignupUserInput!
    $signinUserInput: SigninUserInput!
  ) {
    createUser(input: $createUserInput) {
      user {
        id
      }
    }
    signinUser(input: $signinUserInput) {
      token
      user {
        id
      }
    }
  }
`;

type Fn = (val: any) => any;

type Var = {
  name: string,
  email: {
    email: string,
    password: string,
  },
};

function commit(vars: Var, onCompleted: Fn, onError: Fn) {
  const variables = {
    createUserInput: {
      name: vars.name,
      authProvider: {
        email: vars.email,
      },
      clientMutationId: '',
    },
    signinUserInput: {
      email: vars.email,
      clientMutationId: '',
    },
  };

  return commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
  });
}

export default { commit };
