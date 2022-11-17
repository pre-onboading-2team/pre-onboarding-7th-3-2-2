import useUserList from '../hooks/useUserList';

import UserListBody from './UserListBody';
import UserListHeader from './UserListHeader';
import UserListPagenation from './UserListPagenation';

export default function UserListContainer() {
  const { data, page, isLoading, handlePageNext, handlePagePrev } =
    useUserList();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <UserListPagenation
        handlePageNext={handlePageNext}
        handlePagePrev={handlePagePrev}
        page={page}
      />
      <div>
        <UserListHeader />
        <UserListBody userList={data} />
      </div>
    </div>
  );
}
