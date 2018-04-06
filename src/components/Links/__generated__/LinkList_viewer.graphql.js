/**
 * @flow
 */

/* eslint-disable */

'use strict';

import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type LinkList_viewer$ref: FragmentReference;
export type LinkList_viewer = {|
  +allLinks: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
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
    |}>,
    +pageInfo: ?{|
      +hasNextPage: ?boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: LinkList_viewer$ref,
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
    name: 'LinkList_viewer',
    type: 'Viewer',
    metadata: null,
    argumentDefinitions: [
      {
        kind: 'LocalArgument',
        name: 'first',
        type: 'Int',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'last',
        type: 'Int',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'before',
        type: 'String',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'after',
        type: 'String',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'search',
        type: 'String',
        defaultValue: null,
      },
    ],
    selections: [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'allLinks',
        storageKey: 'allLinks(first:10)',
        args: [
          {
            kind: 'Literal',
            name: 'first',
            value: 10,
            type: 'Int',
          },
        ],
        concreteType: 'LinkConnection',
        plural: false,
        selections: [
          {
            kind: 'LinkedField',
            alias: null,
            name: 'edges',
            storageKey: null,
            args: null,
            concreteType: 'LinkEdge',
            plural: true,
            selections: [
              {
                kind: 'LinkedField',
                alias: null,
                name: 'node',
                storageKey: null,
                args: null,
                concreteType: 'Link',
                plural: false,
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
              },
            ],
          },
          {
            kind: 'LinkedField',
            alias: null,
            name: 'pageInfo',
            storageKey: null,
            args: null,
            concreteType: 'PageInfo',
            plural: false,
            selections: [
              {
                kind: 'ScalarField',
                alias: null,
                name: 'hasNextPage',
                args: null,
                storageKey: null,
              },
              {
                kind: 'ScalarField',
                alias: null,
                name: 'endCursor',
                args: null,
                storageKey: null,
              },
            ],
          },
        ],
      },
    ],
  };
})();
(node: any).hash = '845f4e2574df7f4a7e86520d34398479';
module.exports = node;
