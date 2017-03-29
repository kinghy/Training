/**
 * Created by rjt on 17/3/24.
 */
import * as ActionType from '../constants/ActionTypes'
import { browserHistory } from 'react-router'

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

export const login = (username,password) => (dispatch, getState) => {
    var param = {
        "username":username,
        "password":password
    }

    fetch("http://192.168.4.105:8080/login", {
        method: 'POST',
        mode: 'cors',
        credentials: 'credentials',
        cache: 'default',
        headers: {
            "Access-Control-Allow-Origin":"*",
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body: JSON.stringify(param)
    })
        .then((response) => response.json())
        .then((responseData) => {
            if(responseData.result=="N"){
                throw responseData.errorMsg;
            }
            browserHistory.push("/board")
        })
        .catch((e)=>{
            alert(e)
            // if(typeof errorCallback === "function"){
            //     errorCallback(e);
            // };
        })
        .done()
}