import { GET_USERS, SHOW_LOADER, CLEAR_USERS } from '../actions';

const initialState = {
  isLoading: false,
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
