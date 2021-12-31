import { gql } from '@apollo/client';

const SIGN_IN = gql`
mutation credentials($username: String!, $password: String!) {
  authorize(credentials: {username: $username, password: $password}) {
    accessToken
  }
}
`;

const CREATE_REVIEW = gql`
mutation review($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
  createReview(review: {repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text}) {
    id
  }
}
`;

export default {
  SIGN_IN,
  CREATE_REVIEW
};
