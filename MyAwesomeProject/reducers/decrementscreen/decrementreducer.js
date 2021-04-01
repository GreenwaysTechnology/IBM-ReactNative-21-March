//import { DECREMENT }  from  '.../actionconstants'
import { DECREMENT } from '../../actionconstants'

export const decrementReducer = (state = 100, { type }) => {
    switch (type) {
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
