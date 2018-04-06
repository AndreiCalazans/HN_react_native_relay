/**
 * @flow
 */

/* eslint-disable */

'use strict';

import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Link_link$ref: FragmentReference;
export type Link_link = {|
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
  +$refType: Link_link$ref,
|};
const node /*: ConcreteFragment */ = (function() {
  var v0 = {
    kind: 'ScalarField',
    alias: null,
    name: 'id',
    args: null,
    storageKey: null,
  };
  return {
    kind: 'Fragment',
    name: 'Link_link',
    type: 'Link',
    metadata: null,
    argumentDefinitions: [],
    selections: [
      v0,
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
          v0,
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
  };
})();
(node: any).hash = 'bc036f571b42ee8d8b1224ac1d350c85';
module.exports = node;
