/**
 * @flow
 */

/* eslint-disable */

'use strict';

import type { ConcreteFragment } from 'relay-runtime';
type Link_link$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type LinkList_viewer$ref: FragmentReference;
export type LinkList_viewer = {|
  +allLinks: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: Link_link$ref,
      |},
    |}>,
    +pageInfo: ?{|
      +hasNextPage: ?boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: LinkList_viewer$ref,
|};
const node /*: ConcreteFragment */ = {
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
  ],
  selections: [
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
                {
                  kind: 'FragmentSpread',
                  name: 'Link_link',
                  args: null,
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
(node: any).hash = '82213f8c0150627df91d489283819cb1';
module.exports = node;
