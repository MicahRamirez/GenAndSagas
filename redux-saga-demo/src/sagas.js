import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { Actions, ActionTypes } from './AppContainer';
import { push } from 'react-router-redux';
const SERVER_URL = 'http://localhost:3000/';

const MockSDK = {
	authenticate: function(params) {
		return fetch(SERVER_URL + 'api/authenticate', {method: 'POST', headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({params: params})})
			.then((res) => Promise.resolve(res.json()))
			.catch((err) => {
				console.log(err.stack);
				return Promise.resolve(err);
			});
	},
};

function* handleLoginRequest(action) {
	try {
		let response = yield call([MockSDK, MockSDK.authenticate],{username: action.username, pwd: action.pwd});
		if (response.payload.errorCode) {
			yield put(Actions.loginFailure(response.payload));
		} 
		else {
			yield put(Actions.loginSuccess(response.payload));
			yield put(push('/success'));
		}

	}
	catch(error) {
		console.log(error.stack);
		yield put(Actions.loginFailure({'error': error}))
	}
}


/**
 * Root saga acting like a "daemon" waiting for any Actions of type LOGIN_REQUEST
 */
export default function* rootSaga() {
	yield takeLatest(ActionTypes.LOGIN_REQUEST, handleLoginRequest);
}