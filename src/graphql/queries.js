import { gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query repositories(
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection, 
    $searchKeyword: String,
    $first: Int,
    $after: String) {
        repositories(
          orderBy: $orderBy, 
          orderDirection: $orderDirection, 
          searchKeyword: $searchKeyword,
          first: $first,
          after: $after) {
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
            cursor
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
          }
        }
  }
`;

const GET_AUTH_STATUS = gql`
query getAuthorizedUser($includeReviews: Boolean = false) {
  authorizedUser {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          id
          text
          rating
          createdAt
          repositoryId
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
`;

const GET_REPOSITORY = gql`
query repository($id: ID!, $first: Int, $after: String) {
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
    reviews(first: $first, after: $after) {
      totalCount
      edges {
        node {
          id
          text
          rating
          createdAt
          repositoryId
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
`;

export default {
  GET_REPOSITORIES,
  GET_AUTH_STATUS,
  GET_REPOSITORY
};
