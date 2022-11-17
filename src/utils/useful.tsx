import { ACCOUNTSTATE } from './constants/accountState';
import { BROKERS } from './constants/brokers';
import { GENDER } from './constants/gender';

export const addCommas = (str: string): string => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const convertBroker = (brokerId: string): string => {
  return BROKERS[brokerId as keyof typeof BROKERS];
};

export const convertAccountState = (status: number): string => {
  return ACCOUNTSTATE[status as keyof typeof ACCOUNTSTATE];
};

export const convertGender = (gender_origin: number): string => {
  return GENDER[gender_origin as keyof typeof GENDER];
};

export const convertDateToKr = (date: string): string => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = 1 + newDate.getMonth();
  const day = newDate.getDate();
  return `${year}년 ${month}월 ${day}일 `;
};

export const maskingNumber = (number: string): string => {
  const middleMask = number.substring(1, number.length - 1);
  let masking = '';

  for (let i = 0; i < middleMask.length; i++) {
    masking += '*';
  }

  return (
    number.substring(0, 0) +
    number.replace(middleMask, masking) +
    number.substring(number.length, number.length)
  );
};

export const maskingName = (name: string): string => {
  if (name.length <= 2) return name;

  return name.replace(/(?<=.{2})./gi, '*');
};

export const checkActive = (isActive: boolean): string => {
  return isActive ? '활성화' : '비활성화';
};
