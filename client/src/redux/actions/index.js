import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMONS_NAME = 'GET_POKEMONS_NAME';
export const POKEMONS_NOT_FOUND = 'POKEMONS_NOT_FOUND';
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
