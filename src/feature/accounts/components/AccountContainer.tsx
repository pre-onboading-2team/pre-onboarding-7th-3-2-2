import AccountBody from './AccountBody';
import AccountHeader from './AccountHeader';
import AccountPagenation from './AccountPagenation';
import useAccounts from '../hooks/useAccount';

export default function AccountContainer() {
  const { data, page, isLoading, handlePageNext, handlePagePrev } =
    useAccounts();

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div>
      <AccountPagenation
        handlePageNext={handlePageNext}
        handlePagePrev={handlePagePrev}
        page={page}
      />
      <div>
        <AccountHeader />
        <AccountBody accounts={data} />
      </div>
    </div>
  );
}
