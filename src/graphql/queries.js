import { gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query {
        repositories {
          edges {
            node {
              id
              fullName
              description
              language
              stargazersCount
              forksCount
              reviewCount
              ratingAverage
              ownerAvatarUrl
            }
          }
        }
  }
`;

const GET_AUTH_STATUS = gql`
query {
  authorizedUser {
    id
    username
  }
}
`;

const GET_REPOSITORY = gql`
query repository($id: ID!) {
  repository(id: $id) {
    id
    fullName
    url
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
  }
}
`;

export default {
  GET_REPOSITORIES,
  GET_AUTH_STATUS,
  GET_REPOSITORY
};
