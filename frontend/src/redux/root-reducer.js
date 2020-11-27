import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import alertReducer from './alert/reducer';
import flightsReducer from './flights/reducer';
import modalReducer from './modal/reducer';
import searchReducer from './search/reducer';
import userReducer from './user/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  alerts: alertReducer,
  modal: modalReducer,
  search: searchReducer,
  flights: flightsReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
