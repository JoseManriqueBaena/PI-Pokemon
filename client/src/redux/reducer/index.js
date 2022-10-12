import { GET_ALL_POKEMONS, LOADING } from '../actions/index.js';

const initialState = {
	pokemons: [],
	types: [],
	loading: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POKEMONS:
			return {
				...state,
				loading: false,
				pokemons: action.payload,
			};

		case LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return {
				...state,
			};
	}
};

export default reducer;
