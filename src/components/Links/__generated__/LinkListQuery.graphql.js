/**
 * @flow
 * @relayHash 24d66f78acd0cbe16e8b9379d798d1b5
 */

/* eslint-disable */

'use strict';

import type { ConcreteRequest } from 'relay-runtime';
type LinkList_viewer$ref = any;
export type LinkListQueryVariables = {|
  first?: ?number,
|};
export type LinkListQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: LinkList_viewer$ref,
  |},
|};
/*
query LinkListQuery(
  $first: Int
) {
  viewer {
    ...LinkList_viewer_3ASum4
    id
  }
}

fragment LinkList_viewer_3ASum4 on Viewer {
  user {
    name
    id
  }
  allLinks(first: $first) {
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
        name: 'first',
        type: 'Int',
        defaultValue: null,
      },
    ],
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: 'name',
      args: null,
      storageKey: null,
    },
    v2 = {
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
      'query LinkListQuery(\n  $first: Int\n) {\n  viewer {\n    ...LinkList_viewer_3ASum4\n    id\n  }\n}\n\nfragment LinkList_viewer_3ASum4 on Viewer {\n  user {\n    name\n    id\n  }\n  allLinks(first: $first) {\n    edges {\n      node {\n        ...Link_link\n        id\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment Link_link on Link {\n  id\n  description\n  url\n  createdAt\n  votes {\n    count\n  }\n  postedBy {\n    id\n    name\n  }\n}\n',
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
                  name: 'first',
                  variableName: 'first',
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
              name: 'user',
              storageKey: null,
              args: null,
              concreteType: 'User',
              plural: false,
              selections: [v1, v2],
            },
            {
              kind: 'LinkedField',
              alias: null,
              name: 'allLinks',
              storageKey: null,
              args: [
                {
                  kind: 'Variable',
                  name: 'first',
                  variableName: 'first',
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
                        v2,
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
                          selections: [v2, v1],
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
            v2,
          ],
        },
      ],
    },
  };
})();
(node: any).hash = 'a2a78813fb0f1f26da5d3ef033c8b717';
module.exports = node;
