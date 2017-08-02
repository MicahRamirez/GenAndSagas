import { ActionTypes } from './AppContainer';

const reducer = (state = {}, action) => {
	if (action === null ) {
		return state;
	}
	switch(action.type) {
		case ActionTypes.LOGIN_SUCCESS: {
			return Object.assign({}, action.payload);
		}
		case ActionTypes.LOGIN_FAILURE: {
			return Object.assign({}, state, action.payload);
		}
		default: {
			return Object.assign({}, state);
		}
	}
}

export default reducer;