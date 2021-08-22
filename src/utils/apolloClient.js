import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import Constants from 'expo-constants';

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloUri,
});

const typeDefs = gql`
    type AuthorizeInput {
    username: String!,
    password: String!
  }
`;

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    typeDefs
  });
};

export default createApolloClient;
