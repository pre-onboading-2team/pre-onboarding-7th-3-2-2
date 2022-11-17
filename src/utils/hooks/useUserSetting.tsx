import { useQuery } from 'react-query';
import { fetchUserList } from '../../api/user';
import { queryKeys } from '../constants/queryKeys';

export default function useUserSetting(uuid: string) {
  const { data, isLoading } = useQuery(
    [queryKeys.user, { uuid }],
    () => fetchUserList(uuid),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
    }
  );
  return { data, isLoading };
}
