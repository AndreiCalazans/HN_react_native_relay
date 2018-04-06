import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';

// import { GC_AUTH_TOKEN } from './constants';
const store = new Store(new RecordSource());

const fetchQuery = (operation, variables) => {
  return fetch('https://api.graph.cool/relay/v1/cj5zkeqs96v0u01047kxj21wg', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${localStorage.getItem(GC_AUTH_TOKEN)}`,
      // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjU2MjY0MDMsImlhdCI6MTUyMzAzNDQwMywicHJvamVjdElkIjoiY2o1emtlcXM5NnYwdTAxMDQ3a3hqMjF3ZyIsInVzZXJJZCI6ImNqNXp0M3h5MDJjYWQwMTk0NjBiYTU5ZzgiLCJhdXRoRGF0YSI6eyJlbWFpbCI6ImFuZHJlaUB0ZXN0LmNvbSJ9LCJtb2RlbE5hbWUiOiJVc2VyIn0.tIzlLHGQHwi2UXtyMVQmPjVYNIGap9yTc3j3r-4TzSQ',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
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
