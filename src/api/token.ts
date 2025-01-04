import { personalToken } from "../consts/const";

export const getToken = (): string => {
  const token = localStorage.getItem(personalToken);
  return token ?? '';
};

export const saveToken = (token: string): void => {
  localStorage.setItem(personalToken, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(personalToken);
};