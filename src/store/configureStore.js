/**
 * Created by rjt on 17/3/24.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import createLogger from 'redux-logger'


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const configureStore = (onComplete:() => void) => createStore(
    reducer,
    applyMiddleware(...middleware)
)


export default configureStore