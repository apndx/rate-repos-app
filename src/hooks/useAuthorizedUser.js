import { useQuery } from '@apollo/client';
import queries from '../graphql/queries';

const useAuthorizedUser = (includeReviews) => {
  const variables = 
  {  first: 8, includeReviews };

  const { data, loading, fetchMore, ...result } = useQuery(queries.GET_AUTH_STATUS, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && includeReviews && data?.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...variables,
      },

    },
    );
  };

  const authStatus = data?.authorizedUser ? true : false;
  const authUser = data?.authorizedUser;

  return {
    authStatus,
    authUser,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };

};

export default useAuthorizedUser;
