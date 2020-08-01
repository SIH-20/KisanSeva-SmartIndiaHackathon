import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middleswares = [logger];
const store = createStore(rootReducer,applyMiddleware(...middleswares));

export default store;
