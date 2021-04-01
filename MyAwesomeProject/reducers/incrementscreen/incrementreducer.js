import { INCREMENT } from '../../actionconstants'

//reducer
export const incrementReducer = (state = 10, { type }) => {
    switch (type) {
        case INCREMENT:
            return state + 1;
        default:
            return state;
    }
};