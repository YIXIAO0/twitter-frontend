import { get } from '../utils/request';

export const loginService = (username, password) => get(`/api/login/${username}/${password}`);

export const registerService = (username, password) => get(`/api/login/${username}/${password}`);
