/**
 * @flow
 * @relayHash b2ab8a2d7ba1c292bb0a677cbcaced06
 */

/* eslint-disable */

'use strict';

import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserMutationVariables = {|
  createUserInput: {
    name: string,
    linksIds?: ?$ReadOnlyArray<string>,
    links?: ?$ReadOnlyArray<{
      description: string,
      url: string,
      votesIds?: ?$ReadOnlyArray<string>,
      votes?: ?$ReadOnlyArray<{
        userId?: ?string,
      }>,
    }>,
    votesIds?: ?$ReadOnlyArray<string>,
    votes?: ?$ReadOnlyArray<{
      linkId?: ?string,
      link?: ?{
        description: string,
        url: string,
        postedById?: ?string,
        votesIds?: ?$ReadOnlyArray<string>,
        votes?: ?$ReadOnlyArray<{
          linkId?: ?string,
          userId?: ?string,
        }>,
      },
    }>,
    clientMutationId: string,
    authProvider: {
      email?: ?{
        email: string,
        password: string,
      },
    },
  },
  signinUserInput: {
    email?: ?{
      email: string,
      password: string,
    },
    clientMutationId: string,
  },
|};
export type CreateUserMutationResponse = {|
  +createUser: {|
    +user: ?{|
      +id: string,
    |},
  |},
  +signinUser: {|
    +token: ?string,
    +user: ?{|
      +id: string,
    |},
  |},
|};
/*
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
*/

const node /*: ConcreteRequest */ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'createUserInput',
        type: 'SignupUserInput!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'signinUserInput',
        type: 'SigninUserInput!',
        defaultValue: null,
      },
    ],
    v1 = {
      kind: 'LinkedField',
      alias: null,
      name: 'user',
      storageKey: null,
      args: null,
      concreteType: 'User',
      plural: false,
      selections: [
        {
          kind: 'ScalarField',
          alias: null,
          name: 'id',
          args: null,
          storageKey: null,
        },
      ],
    },
    v2 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'createUser',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'createUserInput',
            type: 'SignupUserInput!',
          },
        ],
        concreteType: 'CreateUserPayload',
        plural: false,
        selections: [v1],
      },
      {
        kind: 'LinkedField',
        alias: null,
        name: 'signinUser',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'signinUserInput',
            type: 'SigninUserInput!',
          },
        ],
        concreteType: 'SigninPayload',
        plural: false,
        selections: [
          {
            kind: 'ScalarField',
            alias: null,
            name: 'token',
            args: null,
            storageKey: null,
          },
          v1,
        ],
      },
    ];
  return {
    kind: 'Request',
    operationKind: 'mutation',
    name: 'CreateUserMutation',
    id: null,
    text:
      'mutation CreateUserMutation(\n  $createUserInput: SignupUserInput!\n  $signinUserInput: SigninUserInput!\n) {\n  createUser(input: $createUserInput) {\n    user {\n      id\n    }\n  }\n  signinUser(input: $signinUserInput) {\n    token\n    user {\n      id\n    }\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'CreateUserMutation',
      type: 'Mutation',
      metadata: null,
      argumentDefinitions: v0,
      selections: v2,
    },
    operation: {
      kind: 'Operation',
      name: 'CreateUserMutation',
      argumentDefinitions: v0,
      selections: v2,
    },
  };
})();
(node: any).hash = 'e9902bf5a0ef770e82d370afc96eef75';
module.exports = node;
