import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import rootReducer from './reducer';

import {apiMiddleware} from 'redux-api-middleware';

const middleware = [apiMiddleware];

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middleware.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const shouldLoadDevTools =
    window.devToolsExtensions && process.env.NODE_ENV !== 'production'
        ? window.devToolsExtension()
        : f => f;


export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(
        rootReducer, initialState, shouldLoadDevTools
    );

    return store;
}