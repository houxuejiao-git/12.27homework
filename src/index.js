import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import goods from './reducers/goodsReducer'
import foods from './reducers/foodsReducer'
let combine = combineReducers({
    goods,
    foods
})
let store = createStore(combine,applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={ store }>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
