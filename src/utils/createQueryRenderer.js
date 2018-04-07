// @flow

import * as React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import type { GraphQLTaggedNode, Variables } from 'react-relay';
import { QueryRenderer } from 'react-relay';
import { Text } from 'react-native-elements';

import Loading from '../components/common/Loading';
import environment from './Environment';

type Config = {
  query: ?GraphQLTaggedNode,
  queriesParams?: ?(props: Object) => Object,
  variables?: Variables,
};

export default function createQueryRenderer(
  FragmentComponent: React.ComponentType<*>,
  Component: React.ComponentType<*>,
  config: Config,
): React.ComponentType<*> {
  const { query, queriesParams } = config;

  class QueryRendererWrapper extends React.Component<$FlowFixMeProps> {
    render() {
      const variables = queriesParams
        ? queriesParams(this.props)
        : config.variables;

      return (
        <QueryRenderer
          environment={environment}
          query={query}
          variables={variables}
          render={({ error, props }) => {
            if (error) {
              return <Text>{error}</Text>;
            }

            if (props) {
              return <FragmentComponent {...this.props} {...props} />;
            }

            return <Loading />;
          }}
        />
      );
    }
  }

  return hoistStatics(QueryRendererWrapper, Component);
}
