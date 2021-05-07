import { createStore, compose, applyMiddleware } from 'redux'
import rootReducers from './reducers/index';
import thunk from 'redux-thunk'

const store = createStore(
        rootReducers,
        compose(
            applyMiddleware(thunk/*, createLogger()*/)
        )
    );

export default store;



