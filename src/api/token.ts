import { TOKEN } from "../consts/const";

export const getToken = (): string => {
  const token = localStorage.getItem(TOKEN);
  return token ?? '';
};

export const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(TOKEN);
};