import { API_PATH } from '../config/api';

export default class Api {
  static loadUser = async () => {
    try {
      const response = await fetch(`${API_PATH}auth/user`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error(response);
    } catch (errors) {
      return { errors };
    }
  };

  timeout = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  static logoutUser = async () => {
    try {
      const response = await fetch(`${API_PATH}auth/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      const waitFor = (delay) =>
        new Promise((resolve) => setTimeout(resolve, delay));

      await waitFor(1000);

      const result = await response.json();

      return result;
    } catch (errors) {
      return errors;
    }
  };
}
