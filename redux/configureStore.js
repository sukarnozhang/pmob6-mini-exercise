import { createStore, combineReducers } from 'redux';
import counterReducer from "./modules/counter";

const overallReducer = combineReducers({
  counter: counterReducer
})

const store = createStore(overallReducer);

export default store;
