// import {bookAdded} from '../actions/actions'
import { combineReducers } from 'redux';

// import store from '../store'

// const unsubscribe = store.subscribe(()=>{
//   console.log("STORE CHANGED!", store.getState())
// });

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     title: 'The Great Gatsby',
//     start_date: 'jan 1st',
//     end_date: 'feb 2nd'
//   }
// })

// unsubscribe(); 

// store.dispatch({
//   type: actions.BOOK_REMOVED,
//   payload: {
//     id: 1
//   }
// })

// console.log(store.getState())

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;