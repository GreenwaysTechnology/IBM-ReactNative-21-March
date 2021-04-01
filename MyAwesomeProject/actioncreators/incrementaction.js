import { INCREMENT } from '../actionconstants';

// function incActionCreator(payload) {
//     return {
//         type: INCREMENT,
//         payload
//     }
// }
// //sync action
// const incActionCreator = payload => ({
//     type: INCREMENT,
//     payload
// })
//aync
// function incActionCreator(payload) {
//     setTimeout(function () {
//         return {
//             type: INCREMENT,
//             payload
//         }
//     }, 2000)
// }
function incActionCreator(payload) {
    //thunk middleware syntax
    return function (dispatch) {
        setTimeout(function () {
            dispatch({
                type: INCREMENT,
                payload
            });
        }, 3000)
    }
}
export { incActionCreator };