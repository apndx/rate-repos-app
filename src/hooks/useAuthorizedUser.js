import { useQuery } from '@apollo/client';
import queries from '../graphql/queries';

const useAuthorizedUser = () => {
  const { data } = useQuery(queries.GET_AUTH_STATUS, {
    fetchPolicy: 'cache-and-network',
  });
  const authStatus = data.authorizedUser === null ? false : true;
  return authStatus;
};

export default useAuthorizedUser;
