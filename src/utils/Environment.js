import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { AsyncStorage } from 'react-native';

import { GC_AUTH_TOKEN } from './constants';
const store = new Store(new RecordSource());

const fetchQuery = async (operation, variables) => {
  const token = await AsyncStorage.getItem(GC_AUTH_TOKEN);

  return fetch('https://api.graph.cool/relay/v1/cj5zkeqs96v0u01047kxj21wg', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then(async response => {
      const res = await response.json();

      if (res.data) return res;

      // necessary due to limitations of graphcool.
      return {
        data: {
          ...res.data,
          error: res.errors,
        },
      };
    })
    .catch(error => {
      // eslint-disable-next-line
      console.log('error', error);
      return error;
    });
};

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text;

  const subscriptionClient = new SubscriptionClient(
    'wss://subscriptions.us-west-2.graph.cool/v1/cj5zkeqs96v0u01047kxj21wg',
    { reconnect: true },
  );
  subscriptionClient.subscribe({ query, variables }, (error, result) => {
    observer.onNext({ data: result });
  });
};

const network = Network.create(fetchQuery, setupSubscription);

const environment = new Environment({
  network,
  store,
});

export default environment;
