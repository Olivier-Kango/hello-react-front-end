import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import message from './message/message';

const rootReducer = {
  reducer: {
    message,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
