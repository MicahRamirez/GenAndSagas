
const reducer = (state = {}, action) => {
	if (action === null ) {
		return state;
	}
	switch(action.type) {
		default: {
			return Object.assign({}, state);
		}
	}
}

export default reducer;