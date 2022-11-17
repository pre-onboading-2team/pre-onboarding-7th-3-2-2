import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface AccountsPagenationProps {
  page: string | string[];
  handlePagePrev: () => void;
  handlePageNext: () => void;
}

export default function AccountPagenation({
  page,
  handlePagePrev,
  handlePageNext,
}: AccountsPagenationProps) {
  return (
    <div>
      <button type="button" onClick={handlePagePrev}>
        <ChevronLeftIcon className="w-4 h-4" />
      </button>
      <span>{page} page</span>
      <button type="button" onClick={handlePageNext}>
        <ChevronRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
