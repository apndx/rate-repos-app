import { useQuery } from '@apollo/client';
import queries from '../graphql/queries';
import { selectOrder } from '../utils';

const useRepositories = (orderBy, searchKeyword) => {

  const order = selectOrder(orderBy);
  const variables = 
  { orderBy: order[0], 
    orderDirection: order[1], 
    searchKeyword,
    first: 6
  };
  
  const { data, loading, fetchMore, ...result } = useQuery(queries.GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },

    },
    );
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
