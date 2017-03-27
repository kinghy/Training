/**
 * Created by rjt on 17/3/24.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import createLogger from 'redux-logger'
import {persistStore, autoRehydrate} from 'redux-persist'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

let createAppStore = applyMiddleware(...middleware)(createStore);

const configureStore = (onComplete:() => void) => {
    var store = autoRehydrate()(createAppStore)(reducer);
    persistStore(store)
    return store;

}


export default configureStore
