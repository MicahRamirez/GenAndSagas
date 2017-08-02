import 'whatwg-fetch'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { SuccessComponent } from './App';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { registerSagas } from './sagas';
import 'typeface-roboto';
import reducer from './reducer';
import rootSaga from './sagas';
import { Route, Switch } from 'react-router-dom';


const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const routeMiddleware = routerMiddleware(history);


const store = createStore(
	combineReducers({reducer, router: routerReducer}),
	{},
	composeWithDevTools(
		// client.middleware() sets the store for the client, which is critical for getting the accessToken
		// when dispatching ajax requests
		applyMiddleware(routeMiddleware, sagaMiddleware)
	)
);

console.log(ConnectedRouter)

// start saga "daemon"
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path={'/'} component={AppContainer}/>
					<Route exact path={'/success'} component={SuccessComponent}/>
				</Switch>
			</ConnectedRouter>
	</Provider>
, document.getElementById('root'));
