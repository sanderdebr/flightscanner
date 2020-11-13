import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import alertReducer from './alert/reducer';
import flightsReducer from './flights/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  alerts: alertReducer,
  flights: flightsReducer,
});

export default persistReducer(persistConfig, rootReducer);
