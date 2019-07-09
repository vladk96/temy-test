import { combineReducers } from 'redux';

import userList from './userListReducer';
import form from './formReducer';

const rootReducer = combineReducers({
  userList,
  form,
});

export default rootReducer;
