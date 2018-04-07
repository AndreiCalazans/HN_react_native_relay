//  @flow

import { commitMutation, graphql } from 'react-relay';
import environment from '../../../utils/Environment';

import type { CreateVoteInput } from './__generated__/CreateVoteMutation.graphql';

const mutation = graphql`
  mutation CreateVoteMutation($input: CreateVoteInput!) {
    createVote(input: $input) {
      vote {
        id
        link {
          id
          votes {
            count
          }
        }
        user {
          id
        }
      }
    }
  }
`;

type Fn = (val: any) => any;

function commit(vars: CreateVoteInput, onCompleted: Fn, onError: Fn) {
  const variables = {
    input: {
      ...vars,
    },
  };

  return commitMutation(environment, {
    mutation,
    variables,
    optimisticUpdater: proxyStore => {
      const link = proxyStore.get(vars.linkId);
      // to access the objects in the proxyStore use getLinkedRecord
      // to acess the scalar points use getValue
      const currentVoteCount = link.getLinkedRecord('votes').getValue('count');
      const newVoteCount = currentVoteCount + 1;

      link.getLinkedRecord('votes').setValue(newVoteCount, 'count');
    },
    updater: proxyStore => {
      // RootFields use getRootField
      const createVoteField = proxyStore.getRootField('createVote');
      const newVote = createVoteField.getLinkedRecord('vote');
      const updatedLink = newVote.getLinkedRecord('link');
      const newVotes = updatedLink.getLinkedRecord('votes');
      const newVoteCount = newVotes.getValue('count');

      const link = proxyStore.get(vars.linkId);
      link.getLinkedRecord('votes').setValue(newVoteCount, 'count');
    },
    onCompleted,
    onError,
  });
}

export default { commit };
