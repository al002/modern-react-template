import { http } from '../http/instance';
import { RegisterReq, UserType } from '@/types';

export const authApi = {
  authInfo: async () => {
    return http.get<UserType>('/auth/info');
  },
  login: async (user: Pick<UserType, 'email'> & { password: string }) => {
    const res = await http.post<{ access_token: string }>('/auth/login', user);
    if (res?.access_token) {
      localStorage.setItem('access-token', res.access_token);
    }

    return res;
  },
  register: async (data: RegisterReq) => {
    return http.post('/auth/register', data);
  },
  logout: async () => {
    return http.post('/auth/logout');
  },
};
