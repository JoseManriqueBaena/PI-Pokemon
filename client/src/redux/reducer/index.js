import {
	GET_ALL_POKEMONS,
	LOADING,
	GET_POKEMONS_NAME,
	POKEMONS_NOT_FOUND,
	GET_ALL_TYPES,
	FILTER_TYPES,
	ASCENDING_POKEDEX,
	DESCENDING_POKEDEX,
	A_TO_Z,
	Z_TO_A,
	MAX_ATTACK,
	MIN_ATTACK,
	MAX_DEFENSE,
	MIN_DEFENSE,
	REFRESH,
	EXISTING,
	CREATED,
	GET_POKEMON_ID,
	GET_ALL_IMG_TYPES,
} from '../actions/index.js';

import {
	ascAttack,
	ascDefense,
	ascPokedex,
	aToZ,
	desAttack,
	desDefense,
	desPokedex,
	filterCreated,
	filterExisted,
	filterPokemonTypes,
	zToA,
} from './helpers.js';

const initialState = {
	pokemons: [], //ALL
	pokemonsFiltered: [],
	pokeDetail: {},
	types: [],
	imgTypes: [],
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

		case GET_POKEMON_ID:
			return {
				...state,
				loading: false,
				pokeDetail: action.payload,
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
				types: action.payload,
			};

		case GET_ALL_IMG_TYPES:
			return {
				...state,
				imgTypes: action.payload,
			};

		case REFRESH:
			return {
				...state,
				loading: false,
				pokemonsFiltered: state.pokemons,
			};

		case EXISTING:
			return {
				...state,
				loading: false,
				pokemonsFiltered: filterExisted(state.pokemons),
			};

		case CREATED:
			return {
				...state,
				loading: false,
				pokemonsFiltered: filterCreated(state.pokemons),
			};

		case FILTER_TYPES:
			return {
				...state,
				loading: false,
				pokemonsFiltered: filterPokemonTypes(state.pokemons, action),
			};

		case ASCENDING_POKEDEX:
			return {
				...state,
				loading: false,
				pokemonsFiltered: ascPokedex(state.pokemonsFiltered),
			};

		case DESCENDING_POKEDEX:
			return {
				...state,
				loading: false,
				pokemonsFiltered: desPokedex(state.pokemonsFiltered),
			};

		case A_TO_Z:
			return {
				...state,
				loading: false,
				pokemonsFiltered: aToZ(state.pokemonsFiltered),
			};

		case Z_TO_A:
			return {
				...state,
				loading: false,
				pokemonsFiltered: zToA(state.pokemonsFiltered),
			};

		case MAX_ATTACK:
			return {
				...state,
				loading: false,
				pokemonsFiltered: ascAttack(state.pokemonsFiltered),
			};

		case MIN_ATTACK:
			return {
				...state,
				loading: false,
				pokemonsFiltered: desAttack(state.pokemonsFiltered),
			};

		case MAX_DEFENSE:
			return {
				...state,
				loading: false,
				pokemonsFiltered: ascDefense(state.pokemonsFiltered),
			};

		case MIN_DEFENSE:
			return {
				...state,
				loading: false,
				pokemonsFiltered: desDefense(state.pokemonsFiltered),
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
