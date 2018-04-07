/**
 * @flow
 * @relayHash dfb946bf647622c0ab46d8f9828c2589
 */

/* eslint-disable */

'use strict';

import type { ConcreteRequest } from 'relay-runtime';
export type SigninMutationVariables = {|
  input: {
    email?: ?{
      email: string,
      password: string,
    },
    clientMutationId: string,
  },
|};
export type SigninMutationResponse = {|
  +signinUser: {|
    +token: ?string,
    +user: ?{|
      +id: string,
    |},
  |},
|};
/*
mutation SigninMutation(
  $input: SigninUserInput!
) {
  signinUser(input: $input) {
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
        name: 'input',
        type: 'SigninUserInput!',
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'signinUser',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'input',
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
          {
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
        ],
      },
    ];
  return {
    kind: 'Request',
    operationKind: 'mutation',
    name: 'SigninMutation',
    id: null,
    text:
      'mutation SigninMutation(\n  $input: SigninUserInput!\n) {\n  signinUser(input: $input) {\n    token\n    user {\n      id\n    }\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'SigninMutation',
      type: 'Mutation',
      metadata: null,
      argumentDefinitions: v0,
      selections: v1,
    },
    operation: {
      kind: 'Operation',
      name: 'SigninMutation',
      argumentDefinitions: v0,
      selections: v1,
    },
  };
})();
(node: any).hash = '4850e2fc00f49250d238d622a349a9bb';
module.exports = node;
