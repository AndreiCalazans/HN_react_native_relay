/**
 * @flow
 * @relayHash c4c900da68c3ba51fd4d65ffdef50715
 */

/* eslint-disable */

'use strict';

import type { ConcreteRequest } from 'relay-runtime';
type LinkList_viewer$ref = any;
export type LinkListQueryVariables = {|
  after?: ?string,
  before?: ?string,
  search?: ?string,
  first?: ?number,
  last?: ?number,
|};
export type LinkListQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: LinkList_viewer$ref,
  |},
|};
/*
query LinkListQuery {
  viewer {
    ...LinkList_viewer_nvrZx
    id
  }
}

fragment LinkList_viewer_nvrZx on Viewer {
  allLinks(first: 10) {
    edges {
      node {
        ...Link_link
        id
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment Link_link on Link {
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
*/

const node /*: ConcreteRequest */ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'after',
        type: 'String',
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
        name: 'search',
        type: 'String',
        defaultValue: null,
      },
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
    ],
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    };
  return {
    kind: 'Request',
    operationKind: 'query',
    name: 'LinkListQuery',
    id: null,
    text:
      'query LinkListQuery {\n  viewer {\n    ...LinkList_viewer_nvrZx\n    id\n  }\n}\n\nfragment LinkList_viewer_nvrZx on Viewer {\n  allLinks(first: 10) {\n    edges {\n      node {\n        ...Link_link\n        id\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment Link_link on Link {\n  id\n  description\n  url\n  createdAt\n  votes {\n    count\n  }\n  postedBy {\n    id\n    name\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'LinkListQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'viewer',
          storageKey: null,
          args: null,
          concreteType: 'Viewer',
          plural: false,
          selections: [
            {
              kind: 'FragmentSpread',
              name: 'LinkList_viewer',
              args: [
                {
                  kind: 'Variable',
                  name: 'after',
                  variableName: 'after',
                  type: null,
                },
                {
                  kind: 'Variable',
                  name: 'before',
                  variableName: 'before',
                  type: null,
                },
                {
                  kind: 'Variable',
                  name: 'first',
                  variableName: 'first',
                  type: null,
                },
                {
                  kind: 'Variable',
                  name: 'last',
                  variableName: 'last',
                  type: null,
                },
                {
                  kind: 'Variable',
                  name: 'search',
                  variableName: 'search',
                  type: null,
                },
              ],
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'LinkListQuery',
      argumentDefinitions: v0,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'viewer',
          storageKey: null,
          args: null,
          concreteType: 'Viewer',
          plural: false,
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
            v1,
          ],
        },
      ],
    },
  };
})();
(node: any).hash = 'a03937dcd983140f322f90d23bf90846';
module.exports = node;