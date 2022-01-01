import { useQuery } from '@apollo/client';
import queries from '../graphql/queries';
import { selectOrder } from '../utils';

const useRepositories = (orderBy) => {

  const order = selectOrder(orderBy);
  const { data } = useQuery(queries.GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',  variables: { orderBy: order[0], orderDirection: order[1] }
  });

  const repositories = data ? data : [];
  return repositories;
};

export default useRepositories;
