import * as actions from '../actions/actionTypes'

export const bookAdded = (title, start_date, end_date) => ({
    type: actions.BOOK_ADDED,
    payload: {
      title: title,
      start_date: start_date,
      end_date: end_date
    }
})

export const userAdded = name => ({
    type: actions.USER_ADDED,
    payload: {
        name: name
    }
})

// export function bookAdded (title, start_date, end_date) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       title: 'The Great Gatsby',
//       start_date: 'jan 1st',
//       end_date: 'feb 2nd'
//     }
//   }
// }
