import { useQuery } from '@apollo/client';
import queries from '../graphql/queries';

const useRepository = ( id ) => {
  console.log('start use id', id);
  const { loading, error, data} = useQuery(queries.GET_REPOSITORY, { variables: { id },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const repository = data.repository;

  return repository;
};

export default useRepository;
