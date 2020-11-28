import { API_PATH } from '../config/api';

export default class Api {
  static loadUser = async () => {
    try {
      const response = await fetch(`${API_PATH}api/auth/user`, {
        method: 'GET',
      });
      const result = await response.json();

      return result;
    } catch (errors) {
      return errors;
    }
  };
}
