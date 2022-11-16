/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
import {
  ArrowLeftOnRectangleIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import useInputHandle from '../src/feature/auth/hooks/useInputHandle';
import useLogin from '../src/feature/auth/hooks/useLogin';

interface LoginProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function login({ onClick }: LoginProps) {
  const { userInput, handleInputChange, isValidated } = useInputHandle();
  const { handleSubmit } = useLogin(userInput);
  const { email, password } = userInput;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 h-screen flex flex-col justify-center items-center"
    >
      <div className=" drop-shadow-md">
        <p className="text-5xl text-center pb-16">PREFACE</p>
        <div className="flex items-center w-96 p-4 bg-gray-300 ">
          <UserIcon className="w-4 h-4 mr-2" />
          <p>로그인</p>
        </div>
        <div className="flex flex-col justify-center items-center w-96 p-4 bg-white">
          <div className="flex justify-center items-center my-6">
            <UserIcon className="w-4 h-4 mr-2" />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="아이디를 입력하세요"
              className="border w-72 p-2 "
            />
          </div>
          <div className="flex justify-center items-center mb-6">
            <LockClosedIcon className="w-4 h-4 mr-2" />

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="비밀번호를 입력하세요"
              className="border w-72 p-2"
            />
          </div>

          <button
            type="submit"
            disabled={!isValidated}
            onClick={onClick}
            className="flex justify-center items-center w-80 p-2 mb-6 bg-gray-300 text-gray-500"
          >
            <ArrowLeftOnRectangleIcon className="w-4 h-4 mr-2" />
            로그인
          </button>
        </div>
      </div>
    </form>
  );
}
