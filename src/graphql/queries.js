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

export default {
  GET_REPOSITORIES
};
