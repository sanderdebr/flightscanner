export interface User {
  isAuthenticated: boolean;
  loading: boolean;
  displayName: string;
}

export type LogoutUser = typeof types.LOGOUT_USER;

const types = {
  LOAD_USER: 'LOAD_USER',
  LOAD_USER_SUCCESS: 'LOAD_USER_SUCCESS',
  LOAD_USER_FAIL: 'LOAD_USER_FAIL',
  LOGOUT_USER: 'LOGOUT_USER',
  LOGOUT_USER_SUCCESS: 'LOGOUT_USER_SUCCESS',
  LOGOUT_USER_FAIL: 'LOGOUT_USER_FAIL',
};

export default types;
