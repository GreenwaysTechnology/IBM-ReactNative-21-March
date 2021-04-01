import { FINDALL } from '../../actionconstants'

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case FINDALL:
            return state.concat(action.todos)
        default:
            return state;
    }
}
export { todoReducer };