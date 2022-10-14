import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMONS_NAME = 'GET_POKEMONS_NAME';
export const POKEMONS_NOT_FOUND = 'POKEMONS_NOT_FOUND';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const FILTER_TYPES = 'FILTER_TYPES';
export const ASCENDING_POKEDEX = 'ASCENDING_POKEDEX';
export const DESCENDING_POKEDEX = 'DESCENDING_POKEDEX';
export const A_TO_Z = 'A_TO_Z';
export const Z_TO_A = 'Z_TO_A';
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

export function filterTypes(type) {
	return async function (dispatch) {
		dispatch(loading());
		dispatch({ type: FILTER_TYPES, payload: type });
	};
}

export function AscendingPokedex() {
	return async function (dispatch) {
		dispatch(loading());
		dispatch({ type: ASCENDING_POKEDEX });
	};
}

export function getAllTypes() {
	return async function (dispatch) {
		dispatch(loading());
		const response = await axios.get(`http://localhost:3001/types`);
		dispatch({ type: GET_ALL_TYPES, payload: response.data });
	};
}
