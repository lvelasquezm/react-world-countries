import ApolloClient from 'apollo-boost';

import { appSettings } from '../data';

const client = new ApolloClient({
  uri: appSettings.graphqlUri
});

export default client;
