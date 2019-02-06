import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initialState from './store/initialState';
import { applyMiddleware, createStore } from 'redux';
import appReducer from './reducers/ClefReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore( appReducer, initialState, applyMiddleware(thunk) );

Window.appStore = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
