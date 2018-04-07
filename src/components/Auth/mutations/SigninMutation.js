//  @flow

import { commitMutation, graphql } from 'react-relay';
import environment from '../../../utils/Environment';

import type { SigninUserInput } from './__generated__/SigninMutation.graphql';

const mutation = graphql`
  mutation SigninMutation($input: SigninUserInput!) {
    signinUser(input: $input) {
      token
      user {
        id
      }
    }
  }
`;

type Fn = (val: any) => any;

function commit(vars: SigninUserInput, onCompleted: Fn, onError: Fn) {
  const variables = {
    input: {
      ...vars,
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
