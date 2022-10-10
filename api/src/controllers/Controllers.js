const axios = require('axios');
const { Pokemon, Type } = require('../db');

// const getPokemonsApi = async () => {
// 	const pokemonApiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon');
// 	return pokemonApiUrl.data;
// };
const ulr40Pokemon = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0';

const getPokemonsApi = async () => {
	const pokemonApiUrl = await axios.get(ulr40Pokemon);
	const arrayPromise = await pokemonApiUrl.data.results.map((element) => {
		return axios.get(element.url);
	});
	const promiseData = await Promise.all(arrayPromise);
	const pokeInfo = promiseData.map((element) => element.data);
	const pokeInfoFiltered = pokeInfo.map((element) => {
		return {
			id: element.id,
			name: element.name,
			hp: element.stats[0].base_stat,
			attack: element.stats[1].base_stat,
			defense: element.stats[2].base_stat,
			defense: element.stats[5].base_stat,
			height: element.height,
			weight: element.weight,
		};
	});
	return pokeInfoFiltered;
};

const getPokemonDb = async () => {
	const pokeInfoDb = await Pokemon.findAll({
		include: {
			model: Type,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		},
	});
	return pokeInfoDb;
};

const getAllPokemons = async () => {
	const apiInfo = await getPokemonsApi();
	const dbInfo = await getPokemonDb();
	const allInfo = [...apiInfo, ...dbInfo];
	return allInfo;
};

const getPokemonsId = async (id) => {
	const pokeInfo = await getAllPokemons();
	const findPokemon = pokeInfo.find((pokemon) => pokemon.id.toString() === id);
	if (!findPokemon)
		throw new Error(`El pokemon con id ${id} no fue encontrado`);

	return findPokemon;
};

module.exports = {
	getAllPokemons,
	getPokemonsId,
};
