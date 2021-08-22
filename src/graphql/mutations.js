import { gql } from '@apollo/client';

const SIGN_IN = gql`
mutation credentials($username: String!, $password: String!) {
  authorize(credentials: {username: $username, password: $password}) {
    accessToken
  }
}
`;

export default {
  SIGN_IN
};
