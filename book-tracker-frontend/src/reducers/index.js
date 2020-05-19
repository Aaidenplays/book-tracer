import { combineReducers } from 'redux';

import store from '../store'

const unsubscribe = store.subscribe(()=>{
  console.log("STORE CHANGED!", store.getState())
});

store.dispatch({
  type: 'ADD_BOOK',
  payload: {
    title: 'The Great Gatsby',
    start_date: 'jan 1st',
    end_date: 'feb 2nd'
  }
})

unsubscribe();

store.dispatch({
  type: 'REMOVE_BOOK',
  payload: {
    id: 1
  }
})

console.log(store.getState())

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;