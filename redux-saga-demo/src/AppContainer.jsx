import { connect } from 'react-redux';
import App from './App';

/**
 * Making action creators here and action types cuz colocation
 */

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const ActionTypes = {
		LOGIN_REQUEST,
		LOGIN_SUCCESS,
		LOGIN_FAILURE,
};

export const loginRequest = (username, pwd) => {
	return {
		type: LOGIN_REQUEST,
		username,
		pwd,
	};
}

export const loginSuccess = (payload) => {
	return {
		type: LOGIN_SUCCESS,
		payload,
	};
};

export const loginFailure = (payload) => {
	return {
		type: LOGIN_FAILURE,
		payload,
	};
};

export const Actions = {
	loginRequest,
	loginSuccess,
	loginFailure,
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		dispatchLogin: (username, pwd) => {
			dispatch(loginRequest(username, pwd));
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		error: state.reducer.errorCode,
	}
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;