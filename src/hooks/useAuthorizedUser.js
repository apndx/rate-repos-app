import { useQuery } from '@apollo/client';
import queries from '../graphql/queries';

const useAuthorizedUser = (includeReviews) => {
  const variables = 
  {  first: 4, includeReviews };

  const { data, loading, fetchMore, ...result } = useQuery(queries.GET_AUTH_STATUS, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.reviews.pageInfo.endCursor,
        ...variables,
      },

    },
    );
  };

  return {
    authUser: data?.authorizedUser,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };

};

export default useAuthorizedUser;
