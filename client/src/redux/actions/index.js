import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMONS_NAME = 'GET_POKEMONS_NAME';
export const GET_POKEMON_ID = 'GET_POKEMON_ID';
export const POKEMONS_NOT_FOUND = 'POKEMONS_NOT_FOUND';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const FILTER_TYPES = 'FILTER_TYPES';
export const REFRESH = 'REFRESH';
export const ASCENDING_POKEDEX = 'ASCENDING_POKEDEX';
export const DESCENDING_POKEDEX = 'DESCENDING_POKEDEX';
export const A_TO_Z = 'A_TO_Z';
export const Z_TO_A = 'Z_TO_A';
export const MAX_ATTACK = 'MAX_ATTACK';
export const MIN_ATTACK = 'MIN_ATTACK';
export const MAX_DEFENSE = 'MAX_DEFENSE';
export const MIN_DEFENSE = 'MIN_DEFENSE';
export const EXISTING = 'EXISTING';
export const CREATED = 'CREATED';
export const LOADING = 'LOADING';

export function loading() {
	return {
		type: LOADING,
	};
}

export function getAllPokemos() {
	return async function (dispatch) {
		dispatch(loading());
		const response = await axios.get(`http://localhost:3001/pokemons`);
		dispatch({ type: GET_ALL_POKEMONS, payload: response.data });
	};
}

export function getPokemonsName(name) {
	return async function (dispatch) {
		dispatch(loading());
		try {
			const response = await axios.get(
				`http://localhost:3001/pokemons?name=${name}`
			);
			dispatch({ type: GET_POKEMONS_NAME, payload: response.data });
		} catch (error) {
			dispatch({ type: POKEMONS_NOT_FOUND });
		}
	};
}

export function getPokemonId(id) {
	return async function (dispatch) {
		dispatch(loading());
		try {
			const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
			dispatch({ type: GET_POKEMON_ID, payload: response.data });
		} catch (error) {
			dispatch({ type: POKEMONS_NOT_FOUND });
		}
	};
}

export function refresh() {
	return async function (dispatch) {
		dispatch(loading());
		dispatch({ type: REFRESH });
	};
}

export function filterTypes(type) {
	return async function (dispatch) {
		dispatch(loading());
		dispatch({ type: FILTER_TYPES, payload: type });
	};
}

export function pokemonFilter(filter) {
	return async function (dispatch) {
		dispatch(loading());
		switch (filter) {
			case 'All':
				dispatch({ type: REFRESH });
				break;

			case 'Existing':
				dispatch({ type: EXISTING });
				break;

			case 'Created':
				dispatch({ type: CREATED });
				break;

			default:
				break;
		}
	};
}

export function orderFilter(order) {
	return async function (dispatch) {
		dispatch(loading());
		switch (order) {
			case 'Ascending pokedex':
				dispatch({ type: ASCENDING_POKEDEX });
				break;

			case 'Descending pokedex':
				dispatch({ type: DESCENDING_POKEDEX });
				break;

			case 'A to Z':
				dispatch({ type: A_TO_Z });
				break;

			case 'Z to A':
				dispatch({ type: Z_TO_A });
				break;

			case 'Max attack':
				dispatch({ type: MAX_ATTACK });
				break;

			case 'Min attack':
				dispatch({ type: MIN_ATTACK });
				break;

			case 'Max defense':
				dispatch({ type: MAX_DEFENSE });
				break;

			case 'Min defense':
				dispatch({ type: MIN_DEFENSE });
				break;

			default:
				break;
		}
	};
}

export function getAllTypes() {
	return async function (dispatch) {
		const response = await axios.get(`http://localhost:3001/types`);
		dispatch({ type: GET_ALL_TYPES, payload: response.data });
	};
}
