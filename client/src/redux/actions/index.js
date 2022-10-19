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

export function getAllImgTypes() {
	return async function (dispatch) {
		const imgTypes = [
			{
				type: 'normal',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg',
			},
			{
				type: 'fighting',
				url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg',
			},
			{
				type: 'flying',
				url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg',
			},
			{
				type: 'poison',
				url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg',
			},
			{
				type: 'ground',
				url: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg',
			},
			{
				type: 'rock',
				url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg',
			},
			{
				type: 'bug',
				url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg',
			},
			{
				type: 'ghost',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg',
			},
			{
				type: 'steel',
				url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg',
			},
			{
				type: 'fire',
				url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg',
			},
			{
				type: 'water',
				url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg',
			},
			{
				type: 'grass',
				url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg',
			},
			{
				type: 'electric',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg',
			},
			{
				type: 'psychic',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg',
			},
			{
				type: 'ice',
				url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg',
			},
			{
				type: 'dragon',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg',
			},
			{
				type: 'dark',
				url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg',
			},
			{
				type: 'fairy',
				url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg',
			},
			{
				type: 'unknown',
				url: 'Not image',
			},
			{
				type: 'shadow',
				url: 'Not image',
			},
		];
		dispatch({ type: GET_ALL_IMG_TYPES, payload: imgTypes });
	};
}
