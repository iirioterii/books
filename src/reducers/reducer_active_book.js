/**
 * Created by yuriyreva on 29.05.17.
 */
export default (state = null, action) => {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;

        default:
            return state;
    }
};
