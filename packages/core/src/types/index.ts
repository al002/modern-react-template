export interface UserType {
  id: string;
  username: string;
  email: string;
}

export interface RegisterReq {
  username: string;
  email: string;
  password: string;
}
