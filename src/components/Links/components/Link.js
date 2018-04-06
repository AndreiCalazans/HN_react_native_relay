//  @flow

import React from 'react';
import { ListItem } from 'react-native-elements';
import { createFragmentContainer, graphql } from 'react-relay';

import type { Link_link } from './__generated__/Link_link.graphql';
import LinkDescription from './LinkDescription';

type Props = {
  index: number,
  link: Link_link,
};

const Links = ({ index, link: { url, votes, postedBy, createdAt } }: Props) => (
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
    rightIcon={{
      name: 'caret-up',
      type: 'font-awesome',
      color: 'black',
      style: { marginRight: 20 },
    }}
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
