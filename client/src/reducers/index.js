/**
 * Created by rjt on 17/3/24.
 */
import { combineReducers } from 'redux'
import userReducer from './user'



const rootReducer = combineReducers({
    userStore:userReducer,
})

export default rootReducer