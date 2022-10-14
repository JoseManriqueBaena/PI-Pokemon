import {
	GET_ALL_POKEMONS,
	LOADING,
	GET_POKEMONS_NAME,
	POKEMONS_NOT_FOUND,
} from '../actions/index.js';

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

		case GET_POKEMONS_NAME:
			return {
				...state,
				loading: false,
				pokemons: action.payload,
			};

		case POKEMONS_NOT_FOUND:
			return {
				...state,
				loading: false,
				pokemons: [],
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
