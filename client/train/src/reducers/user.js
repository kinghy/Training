/**
 * Created by rjt on 17/3/24.
 */

import * as ActionTypes from '../constants/ActionTypes'
const initialState = {
    username: "",
};

export default function userReducer(state=initialState,action) {
    switch (action.type){
        case ActionTypes.CHANGE_USERNAME:
            return{
                ...state,
                username:action.username
            };
        default:
            return state;
    }
}
