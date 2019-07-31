import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from '../reducers';
import rootSaga from '../sagas/rootSaga';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


    const middleware = [
        sagaMiddleware,
    ];

    const store = createStore(combinedReducers, compose(applyMiddleware(...middleware)));
    sagaMiddleware.run(rootSaga, store.dispatch);
    export default store;



