import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface UserListPagenationProps {
  page: string | string[];
  handlePagePrev: () => void;
  handlePageNext: () => void;
}

export default function UserListPagenation({
  page,
  handlePagePrev,
  handlePageNext,
}: UserListPagenationProps) {
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
