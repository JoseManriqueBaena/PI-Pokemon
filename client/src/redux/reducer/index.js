import {
	GET_ALL_POKEMONS,
	LOADING,
	GET_POKEMONS_NAME,
	POKEMONS_NOT_FOUND,
	GET_ALL_TYPES,
	FILTER_TYPES,
} from '../actions/index.js';

const initialState = {
	pokemons: [],
	pokemonsFiltered: [],
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
				pokemonsFiltered: action.payload,
			};

		case GET_POKEMONS_NAME:
			return {
				...state,
				loading: false,
				pokemonsFiltered: action.payload,
			};

		case POKEMONS_NOT_FOUND:
			return {
				...state,
				loading: false,
				pokemonsFiltered: [],
			};

		case GET_ALL_TYPES:
			return {
				...state,
				loading: false,
				types: action.payload,
			};

		case FILTER_TYPES:
			return {
				...state,
				loading: false,
				pokemonsFiltered: state.pokemons?.filter((pokemon) =>
					pokemon.types
						? pokemon.types.includes(action.payload)
						: pokemon.Types.map((typeDb) => typeDb.name).includes(
								action.payload
						  )
				),
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
