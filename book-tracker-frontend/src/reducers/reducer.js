import * as actions from '../actions/actionTypes'

let bookId = 0;
let userId = 0;

export default function reducer(state = [], action){
    switch(action.type){
        case actions.BOOK_ADDED:
            return [
                ...state,
                {
                    id: ++bookId,
                    title: action.payload.title,
                    start_date: action.payload.start_date,
                    end_date: action.payload.end_date
                }
            ];
        case actions.BOOK_REMOVED:
            return state.filter(book => book.id !== action.payload.id);
        case actions.USER_ADDED:
            return[
                ...state,
                {
                    id: ++userId,
                    name: action.payload.name
                }
            ];
        default:
            return state;
    }
}