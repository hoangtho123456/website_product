import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// import reducer from './Store/reducer';
import counterReducer from './Store/reducers/counter';
import resultReducer from './Store/reducers/result';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching');
            const result = next(action);
            console.log('[Middleware] next state');
            return result;
        }
    }
};

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
