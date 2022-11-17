import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { fetchUserList } from '../../../api/user';
import { queryKeys } from '../../../utils/constants/queryKeys';

export default function useUserList() {
  const router = useRouter();
  const { page = '1' } = router.query;

  const { data = [], isLoading } = useQuery(
    [queryKeys.users, { page }],
    () => fetchUserList(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
    }
  );

  const handlePageNext = () => {
    if (Number.isNaN(Number(page)) || data.length === 0) return;
    router.push(`/users?\\_page=${Number(page) + 1}`);
  };

  const handlePagePrev = () => {
    if (Number.isNaN(Number(page)) || page === '1') return;
    router.push(`/users?\\_page=${Number(page) + -1}`);
  };
  return { data, isLoading, handlePageNext, handlePagePrev, page };
}
