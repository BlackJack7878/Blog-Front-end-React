import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

export const history = createHistory();

const LoggerMiddleware = createLogger();
const RouterMiddleware = routerMiddleware(history);

export const store = createStore(
	reducer,
	applyMiddleware(
		thunkMiddleware,
		LoggerMiddleware,
		RouterMiddleware
	)
);