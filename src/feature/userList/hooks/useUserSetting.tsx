import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { getUserSetting } from '../../../api/user';
import { queryKeys } from '../../../utils/constants/queryKeys';

export default function useUserSetting(uuid: string) {
  const { data = [] } = useQuery(
    [queryKeys.users, { uuid }],
    () => getUserSetting(uuid),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
    }
  );

  return { data };
}
