import useUserInfo from '../../../utils/hooks/useUserInfo';

import { AccountProps } from '../../../types/accounts';

import {
  addCommas,
  checkActive,
  convertAccountState,
  convertBroker,
  convertDateToKr,
  maskingNumber,
} from '../../../utils/useful';

interface AccountItemProps {
  account: AccountProps;
}

export default function AccountItem({ account }: AccountItemProps) {
  const { data, isLoading } = useUserInfo(account.user_id);

  if (isLoading) {
    return (
      <tr>
        <td>로딩중..</td>
      </tr>
    );
  }

  return (
    <tr>
      <td className="p-4">{data?.name}</td>
      <td>{convertBroker(account.broker_id)}</td>
      <td>{maskingNumber(account.number)}</td>
      <td>{convertAccountState(account.status)}</td>
      <td>{account.name}</td>
      <td>{addCommas(account.assets)}</td>
      <td>{addCommas(account.payments)}</td>
      <td>{checkActive(account.is_active)}</td>
      <td>{convertDateToKr(account.created_at)}</td>
    </tr>
  );
}
