/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-cycle */
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

import { path } from '../utils/constants/common';

const Sider = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const onLogout = () => {
    if (!window.confirm('정말 로그아웃 하시겠습니까?')) return;
    queryClient.clear();
    localStorage.removeItem('token');
    router.push(path.login);
  };

  return (
    <div className="mx-auto text-white text-center ">
      <div className="text-5xl font-black p-20">PreFace</div>
      <div className="py-10">대시보드</div>
      <a href={path.account}>
        <div className="py-10">계좌목록</div>
      </a>
      <a href={path.users}>
        <div className="py-10">사용자</div>
      </a>
      <div className="py-10" onClick={onLogout}>
        로그아웃
      </div>
    </div>
  );
};

export default Sider;
