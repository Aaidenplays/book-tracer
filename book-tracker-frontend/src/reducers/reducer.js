
let lastId = 0;

export default function reducer(state = [], action){
    switch(action.type){
        case 'ADD_BOOK':
            return [
                ...state,
                {
                    id: ++lastId,
                    title: action.payload.title,
                    start_date: action.payload.start_date,
                    end_date: action.payload.end_date
                }
            ];
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.payload.id);
        default:
            return state;
    }
}