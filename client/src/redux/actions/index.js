import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMONS_NAME = 'GET_POKEMONS_NAME';
export const GET_POKEMON_ID = 'GET_POKEMON_ID';
export const POKEMONS_NOT_FOUND = 'POKEMONS_NOT_FOUND';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const GET_ALL_IMG_TYPES = 'GET_ALL_IMG_TYPES';
export const FILTER_TYPES = 'FILTER_TYPES';
export const REFRESH = 'REFRESH';
export const ASCENDING_POKEDEX = 'ASCENDING_POKEDEX';
export const DESCENDING_POKEDEX = 'DESCENDING_POKEDEX';
export const A_TO_Z = 'A_TO_Z';
export const Z_TO_A = 'Z_TO_A';
export const MAX_ATTACK = 'MAX_ATTACK';
export const MIN_ATTACK = 'MIN_ATTACK';
export const MAX_DEFENSE = 'MAX_DEFENSE';
export const REFRESH_TYPES = 'REFRESH_TYPES';
export const MIN_DEFENSE = 'MIN_DEFENSE';
export const EXISTING = 'EXISTING';
export const CREATED = 'CREATED';
export const LOADING = 'LOADING';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const SET_NEW_POKEMON = 'SET_NEW_POKEMON';

export function loading() {
	return {
		type: LOADING,
	};
}

export function getAllPokemons() {
	return async function (dispatch) {
		dispatch(loading());
		try {
			const response = await axios.get(`/pokemons`);
			dispatch({ type: GET_ALL_POKEMONS, payload: response.data });
		} catch (error) {
			console.log(error.response.data);
		}
	};
}

export function getPokemonsName(name) {
	return async function (dispatch) {
		dispatch(loading());
		try {
			const response = await axios.get(`/pokemons?name=${name}`);
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
			const response = await axios.get(`/pokemons/${id}`);
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

export function refreshTypes() {
	return async function (dispatch) {
		dispatch(loading());
		dispatch({ type: REFRESH_TYPES });
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
				dispatch(refresh());
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
		try {
			const response = await axios.get(`/types`);
			dispatch({ type: GET_ALL_TYPES, payload: response.data });
		} catch (error) {
			console.log(error.response.data);
		}
	};
}

export function createPokemon(pokemon) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`/pokemons`, pokemon);
			dispatch({ type: CREATE_POKEMON });
			return response;
		} catch (error) {
			console.log(error.response.data);
		}
	};
}

export function setNewPokemon() {
	return async function (dispatch) {
		dispatch({ type: SET_NEW_POKEMON });
	};
}
export function getAllImgTypes() {
	return async function (dispatch) {
		const imgTypes = [
			{
				type: 'normal',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg',
				color: '#919aa2',
			},
			{
				type: 'fighting',
				url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg',
				color: '#e0306a',
			},
			{
				type: 'flying',
				url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg',
				color: '#89aae3',
			},
			{
				type: 'poison',
				url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg',
				color: '#b567ce',
			},
			{
				type: 'ground',
				url: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg',
				color: '#e87236',
			},
			{
				type: 'rock',
				url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg',
				color: '#c8b686',
			},
			{
				type: 'bug',
				url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg',
				color: '#83c300',
			},
			{
				type: 'ghost',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg',
				color: '#4c6ab2',
			},
			{
				type: 'steel',
				url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg',
				color: '#5a8ea2',
			},
			{
				type: 'fire',
				url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg',
				color: '#ff9741',
			},
			{
				type: 'water',
				url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg',
				color: '#3692dc',
			},
			{
				type: 'grass',
				url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg',
				color: '#38bf4b',
			},
			{
				type: 'electric',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg',
				color: '#fbd100',
			},
			{
				type: 'psychic',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg',
				color: '#ff6675',
			},
			{
				type: 'ice',
				url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg',
				color: '#4cd1c0',
			},
			{
				type: 'dragon',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg',
				color: '#006fc9',
			},
			{
				type: 'dark',
				url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg',
				color: '#5b5466',
			},
			{
				type: 'fairy',
				url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg',
				color: '#fb89eb',
			},
			{
				type: 'unknown',
				color: '#c6c69b',
			},
			{
				type: 'shadow',
				color: '#3f3f3f',
			},
		];
		dispatch({ type: GET_ALL_IMG_TYPES, payload: imgTypes });
	};
}
