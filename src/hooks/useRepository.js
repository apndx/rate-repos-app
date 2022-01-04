import { useQuery } from '@apollo/client';
import queries from '../graphql/queries';

const useRepository = ( id ) => {

  const variables ={  id, first: 4 };

  const { data, loading, error, fetchMore, ...result } = useQuery(queries.GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network', 
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },

    },
    );
  };

  if (error) return `Error! ${error}`;

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };

};

export default useRepository;
