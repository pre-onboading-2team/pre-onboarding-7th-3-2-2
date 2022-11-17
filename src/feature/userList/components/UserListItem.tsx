import useUserInfo from '../../../utils/hooks/useUserInfo';

import { UserFetchResponseProps } from '../../../types/user';
import useUserSetting from '../../../utils/hooks/useUserSetting';

// import {
//   addCommas,
//   checkActive,
//   convertAccountState,
//   convertBroker,
//   convertDateToKr,
//   maskingName,
// } from '../../../utils/useful';

interface UserItemProps {
  userLists: UserFetchResponseProps;
}

export default function UserListItem({ userLists }: UserItemProps) {
  const { data, isLoading } = useUserSetting(userLists.uuid);

  if (isLoading) {
    return (
      <tr>
        <td>로딩중..</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{userLists.name}</td>
      <td>{userLists.email}</td>
      <td>{userLists.age}</td>
      <td>{userLists.phone_number}</td>
    </tr>
  );
}
