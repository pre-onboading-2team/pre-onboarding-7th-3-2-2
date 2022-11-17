import { UserInputProps } from './user';

export interface LoginTitleProps {
  title: string;
}

export interface LoginInputProps {
  userInput: UserInputProps;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AuthFromProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface AuthButtonProps {
  isValidated: boolean;
}
