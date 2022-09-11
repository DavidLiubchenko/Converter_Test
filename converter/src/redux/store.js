import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import reduxLogger from 'redux-logger';

import rootReducers from './modules'

const configureStore = (reducers = {}, preloadedState = {}, middleware = []) => createStore(
    combineReducers({
        ...rootReducers,
        ...reducers,
    }),
    preloadedState,
    compose(
        applyMiddleware(
            ...middleware,
            thunk,
            reduxLogger
        ),
    )
)

export default configureStore;