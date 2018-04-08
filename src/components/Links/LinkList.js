//  @flow

import * as React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import { ScrollView, FlatList } from 'react-native';

import LoadMore from '../common/LoadMore';
import WithHeader from '../common/WithHeader';
import Link from './components/Link';
import createQueryRenderer from '../../utils/createQueryRenderer';
import CreateVoteMutation from './mutations/CreateVoteMutation';

class LinkList extends React.PureComponent<*> {
  handleVote = (id: string) => {
    const { viewer } = this.props;

    const vars = {
      linkId: id,
      userId: viewer.user.id,
      clientMutationId: '2',
    };

    CreateVoteMutation.commit(vars, () => {}, () => {});
  };

  renderItem = ({ item, index }) => (
    <Link handleVote={this.handleVote} index={index} link={item.node} />
  );

  loadMore = () => {
    const { relay, viewer } = this.props;

    const refetchVariables = fragmentVariables => {
      const totalToRefetch =
        viewer.allLinks.edges.length + fragmentVariables.first;

      return {
        first: totalToRefetch,
      };
    };

    relay.refetch(refetchVariables, null);
  };

  render() {
    const { viewer } = this.props;
    return (
      <ScrollView>
        <FlatList
          data={viewer.allLinks.edges}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => String(index)}
          ListFooterComponent={
            viewer.allLinks.pageInfo.hasNextPage && (
              <LoadMore handleLoadMore={this.loadMore} />
            )
          }
        />
      </ScrollView>
    );
  }
}

const LinkRefetchContainer = createRefetchContainer(
  WithHeader(true)(LinkList),
  {
    viewer: graphql`
      fragment LinkList_viewer on Viewer
        @argumentDefinitions(first: { type: Int }) {
        user {
          name
          id
        }
        allLinks(first: $first) {
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
    query LinkListRefetchQuery($first: Int) {
      viewer {
        ...LinkList_viewer @arguments(first: $first)
      }
    }
  `,
);

export default createQueryRenderer(LinkRefetchContainer, LinkList, {
  query: graphql`
    query LinkListQuery($first: Int) {
      viewer {
        ...LinkList_viewer @arguments(first: $first)
      }
    }
  `,
  variables: {
    first: 10,
    cursor: null,
    search: '',
  },
});
