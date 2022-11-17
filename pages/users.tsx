import UserListContainer from '../src/feature/userList/components/UserListContainer';
import Main from '../src/layouts/Main';

export default function userList() {
  return (
    <Main title="사용자목록">
      {/* <div className="pl-20 h-5/6">
        <div className="font-black text-xl">사용자 정보</div>
        <table className=" w-full h-full table-auto text-left  ">
          <tr>
            <th className="pl-10">이름</th>
            <th>1</th>
            <th className="pl-20">보유중인 계좌수</th>
            <th>111111111111111</th>
          </tr>
          <tr>
            <th className="pl-10">이메일 주소</th>
            <th className="pl-20">핸드폰</th>
          </tr>
          <tr>
            <th className="pl-10">성별</th>
            <th className="pl-20">생년월일</th>
          </tr>
          <tr>
            <th className="pl-10">최근로그인</th>
            <th className="pl-20">가입일</th>
          </tr>
          <tr>
            <th className="pl-10">혜택 수신 동의 여부</th>
            <th className="pl-20">활성화 여부</th>
          </tr>
        </table>
      </div> */}
      <UserListContainer />
    </Main>
  );
}
