/**
 * @flow
 * @relayHash c1308cd7af0d52537d8aeffe4861554a
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
        +description: string,
        +url: string,
        +createdAt: any,
        +votes: ?{|
          +count: number,
        |},
        +postedBy: ?{|
          +id: string,
          +name: string,
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
        description
        url
        createdAt
        votes {
          count
        }
        postedBy {
          id
          name
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
                    kind: 'ScalarField',
                    alias: null,
                    name: 'description',
                    args: null,
                    storageKey: null,
                  },
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'url',
                    args: null,
                    storageKey: null,
                  },
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'createdAt',
                    args: null,
                    storageKey: null,
                  },
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
                  {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'postedBy',
                    storageKey: null,
                    args: null,
                    concreteType: 'User',
                    plural: false,
                    selections: [
                      v1,
                      {
                        kind: 'ScalarField',
                        alias: null,
                        name: 'name',
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
      'mutation CreateVoteMutation(\n  $input: CreateVoteInput!\n) {\n  createVote(input: $input) {\n    vote {\n      id\n      link {\n        id\n        description\n        url\n        createdAt\n        votes {\n          count\n        }\n        postedBy {\n          id\n          name\n        }\n      }\n      user {\n        id\n      }\n    }\n  }\n}\n',
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
(node: any).hash = '5516e9617bd82e3d5fa0373a850abc90';
module.exports = node;
