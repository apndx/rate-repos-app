import { useQuery } from '@apollo/client';
import queries from '../graphql/queries';

const useRepositories = () => {
  const { data } = useQuery(queries.GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositories = data ? data : [];
  return repositories;
};

export default useRepositories;
