import useUserInfo from '../../../utils/hooks/useUserInfo';

import { UserFetchResponseProps } from '../../../types/user';
import useUserSetting from '../../../utils/hooks/useUserSetting';
import { convertGender, convertDateToKr } from '../../../utils/useful';
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
      <td className="p-2">{userLists.name}</td>
      <td className="p-4">@</td>
      <td className="p-4">{userLists.email}</td>
      <td>{userLists.phone_number}</td>
      <td className="p-2">{convertGender(userLists.gender_origin)}</td>
      <td className="p-2">{convertDateToKr(userLists.birth_date)}</td>
      <td className="p-2">{convertDateToKr(userLists.last_login)}</td>
      <td className="p-2">{convertDateToKr(userLists.last_login)}</td>
      <td className="p-2">{convertDateToKr(userLists.created_at)}</td>
    </tr>
  );
}
