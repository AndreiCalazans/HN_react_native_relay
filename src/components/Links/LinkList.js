//  @flow

import * as React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

import LinkDescription from '../common/LinkDescription';
import createQueryRenderer from '../../utils/createQueryRenderer';

class LinkList extends React.PureComponent<*> {
  render() {
    const { viewer } = this.props;
    return (
      <ScrollView>
        {viewer.allLinks.edges.map(({ node }, index) => (
          <ListItem
            key={node.id}
            title={`${index + 1} - ${node.url}`}
            titleStyle={{ fontWeight: '900', color: '#666' }}
            subtitle={
              <LinkDescription
                voteCount={node.votes.count}
                author={node.postedBy && node.postedBy.name}
                date={node.createdAt}
              />
            }
            rightIcon={{
              name: 'caret-up',
              type: 'font-awesome',
              color: 'black',
              style: { marginRight: 20 },
            }}
          />
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
