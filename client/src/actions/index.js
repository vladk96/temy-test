import { fetchUsers } from '../api/api';

export const GET_USERS = 'GET_USERS';
export const CLEAR_USERS = 'CLEAR_USERS';

export const SHOW_LOADER = 'SHOW_LOADER';

export const getUsers = () => {
  const users = fetchUsers();

  return {
    type: GET_USERS,
    payload: users,
  };
};

export const clearUsers = () => ({
  type: CLEAR_USERS,
  payload: null,
});

export const showLoader = () => ({
  type: SHOW_LOADER,
  payload: null,
});
