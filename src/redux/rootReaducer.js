import { combineReducers } from 'redux';
import userReducer from './UserPart';

const rootReducer = combineReducers({
  user: userReducer,
 
});

export default rootReducer;
