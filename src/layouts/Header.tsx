import {
  BellIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center ">
      <h1>{title}</h1>
      <div className="pl-20">
        <ListBulletIcon className="w-7 h-7 " />
      </div>
      <div className="flex">
        <div className="px-10">개발</div>
        <div className="px-10">
          <QuestionMarkCircleIcon className="w-7 h-7" />
        </div>
        <div className="px-10">
          <BellIcon className="w-7 h-7" />
        </div>
        <div className="px-10">이름</div>
      </div>
    </div>
  );
};

export default Header;
