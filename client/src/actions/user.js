/**
 * Created by rjt on 17/3/24.
 */
import * as ActionType from '../constants/ActionTypes'

// export function changeUserName(username){
//
//     return {
//         'type': ActionType.CHANGE_USERNAME,
//         'username':username
//     }
// }

export const changeUserName = (username) => (dispatch, getState) => {
    // const {
    //     nextPageUrl = `users/${login}/starred`,
    //     pageCount = 0
    // } = getState().pagination.starredByUser[login] || {}
    //
    // if (pageCount > 0 && !nextPage) {
    //     return null
    // }
    //
    // return dispatch(fetchStarred(login, nextPageUrl))
    dispatch({
        'type': ActionType.CHANGE_USERNAME,
        'username':username
    })
}