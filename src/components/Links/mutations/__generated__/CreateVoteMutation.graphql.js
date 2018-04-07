/**
 * @flow
 * @relayHash fe947158b331e943019b2d3f9ee850fc
 */

/* eslint-disable */

'use strict';

import type { ConcreteRequest } from 'relay-runtime';
export type CreateVoteMutationVariables = {|
  input: {
    linkId?: ?string,
    link?: ?{
      description: string,
      url: string,
      postedById?: ?string,
      votesIds?: ?$ReadOnlyArray<string>,
      votes?: ?$ReadOnlyArray<{
        userId?: ?string,
      }>,
    },
    userId?: ?string,
    clientMutationId: string,
  },
|};
export type CreateVoteMutationResponse = {|
  +createVote: ?{|
    +vote: ?{|
      +id: string,
      +link: {|
        +id: string,
        +votes: ?{|
          +count: number,
        |},
      |},
      +user: {|
        +id: string,
      |},
    |},
  |},
|};
/*
mutation CreateVoteMutation(
  $input: CreateVoteInput!
) {
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
*/

const node /*: ConcreteRequest */ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'input',
        type: 'CreateVoteInput!',
        defaultValue: null,
      },
    ],
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v2 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'createVote',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'input',
            type: 'CreateVoteInput!',
          },
        ],
        concreteType: 'CreateVotePayload',
        plural: false,
        selections: [
          {
            kind: 'LinkedField',
            alias: null,
            name: 'vote',
            storageKey: null,
            args: null,
            concreteType: 'Vote',
            plural: false,
            selections: [
              v1,
              {
                kind: 'LinkedField',
                alias: null,
                name: 'link',
                storageKey: null,
                args: null,
                concreteType: 'Link',
                plural: false,
                selections: [
                  v1,
                  {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'votes',
                    storageKey: null,
                    args: null,
                    concreteType: 'VoteConnection',
                    plural: false,
                    selections: [
                      {
                        kind: 'ScalarField',
                        alias: null,
                        name: 'count',
                        args: null,
                        storageKey: null,
                      },
                    ],
                  },
                ],
              },
              {
                kind: 'LinkedField',
                alias: null,
                name: 'user',
                storageKey: null,
                args: null,
                concreteType: 'User',
                plural: false,
                selections: [v1],
              },
            ],
          },
        ],
      },
    ];
  return {
    kind: 'Request',
    operationKind: 'mutation',
    name: 'CreateVoteMutation',
    id: null,
    text:
      'mutation CreateVoteMutation(\n  $input: CreateVoteInput!\n) {\n  createVote(input: $input) {\n    vote {\n      id\n      link {\n        id\n        votes {\n          count\n        }\n      }\n      user {\n        id\n      }\n    }\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'CreateVoteMutation',
      type: 'Mutation',
      metadata: null,
      argumentDefinitions: v0,
      selections: v2,
    },
    operation: {
      kind: 'Operation',
      name: 'CreateVoteMutation',
      argumentDefinitions: v0,
      selections: v2,
    },
  };
})();
(node: any).hash = 'bfa4900d93ba84d927c9291c96a44f2f';
module.exports = node;
