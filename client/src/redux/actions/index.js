import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
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
