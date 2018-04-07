//  @flow

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { createFragmentContainer, graphql } from 'react-relay';

import type { Link_link } from './__generated__/Link_link.graphql';
import LinkDescription from './LinkDescription';

type Props = {
  index: number,
  link: Link_link,
  handleVote: string => any,
};

const VoteIcon = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ marginRight: 20 }}>
    <Icon name="caret-up" type="font-awesome" color="black" />
  </TouchableOpacity>
);

const Links = ({
  index,
  handleVote,
  link: { url, id, votes, postedBy, createdAt },
}: Props) => (
  <ListItem
    title={`${index + 1} - ${url}`}
    titleStyle={{ fontWeight: '900', color: '#666' }}
    subtitle={
      <LinkDescription
        voteCount={votes && votes.count}
        author={postedBy && postedBy.name}
        date={createdAt}
      />
    }
    rightIcon={<VoteIcon onPress={() => handleVote(id)} />}
  />
);

export default createFragmentContainer(
  Links,
  graphql`
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
  `,
);
