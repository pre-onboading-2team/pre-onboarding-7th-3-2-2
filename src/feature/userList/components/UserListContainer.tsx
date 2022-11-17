import useUserList from '../hooks/useUserList';
import useUserSetting from '../hooks/useUserSetting';

import UserListBody from './UserListBody';
import UserListHeader from './UserListHeader';
import UserListPagenation from './UserListPagenation';

export default function UserListContainer() {
  const { data, page, isLoading, handlePageNext, handlePagePrev } =
    useUserList();
  // const {setData} = useUserSetting();

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
