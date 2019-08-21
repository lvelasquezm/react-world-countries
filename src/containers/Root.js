import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';

import apolloClient from '../utils/apolloClient';

const Root = () => (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);

export default Root;