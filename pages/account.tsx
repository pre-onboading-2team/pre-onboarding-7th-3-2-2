import Main from '../src/layouts/Main';
import AccountContainer from '../src/feature/accounts/components/AccountContainer';

export default function account() {
  return (
    <Main title="계좌목록">
      <AccountContainer />
    </Main>
  );
}
