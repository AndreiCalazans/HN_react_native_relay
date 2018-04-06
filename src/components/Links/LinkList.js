//  @flow

import * as React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import { ScrollView } from 'react-native';

import Link from './components/Link';
import createQueryRenderer from '../../utils/createQueryRenderer';

class LinkList extends React.PureComponent<*> {
  render() {
    const { viewer } = this.props;
    return (
      <ScrollView>
        {viewer.allLinks.edges.map(({ node }, index) => (
          <Link key={index} index={index} link={node} />
        ))}
      </ScrollView>
    );
  }
}

const LinkRefetchContainer = createRefetchContainer(
  LinkList,
  {
    viewer: graphql`
      fragment LinkList_viewer on Viewer
        @argumentDefinitions(
          first: { type: Int }
          last: { type: Int }
          before: { type: String }
          after: { type: String }
          search: { type: String }
        ) {
        allLinks(first: 10) {
          edges {
            node {
              ...Link_link
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
  },
  graphql`
    query LinkListRefetchQuery(
      $after: String
      $before: String
      $search: String
      $first: Int
      $last: Int
    ) {
      viewer {
        ...LinkList_viewer
          @arguments(
            first: $first
            last: $last
            after: $after
            before: $before
            search: $search
          )
      }
    }
  `,
);

export default createQueryRenderer(LinkRefetchContainer, LinkList, {
  query: graphql`
    query LinkListQuery(
      $after: String
      $before: String
      $search: String
      $first: Int
      $last: Int
    ) {
      viewer {
        ...LinkList_viewer
          @arguments(
            first: $first
            last: $last
            after: $after
            before: $before
            search: $search
          )
      }
    }
  `,
  variables: {
    first: 10,
    cursor: null,
    search: '',
  },
});
