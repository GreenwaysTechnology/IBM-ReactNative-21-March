import { FINDALL } from '../actionconstants';

//api logic
function findAllTodos() {
    return function (dispatch) {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        fetch(url).then(res => res.json()).then(todos => {
            dispatch({
                type: FINDALL,
                todos
            })
        });
    }
}
export { findAllTodos };