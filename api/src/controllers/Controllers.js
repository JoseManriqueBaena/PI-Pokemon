const axios = require('axios');
const { Pokemon, Type } = require('../db');

// const getPokemonsApi = async () => {
// 	const pokemonApiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon');
// 	return pokemonApiUrl.data;
// };
const ulr40Pokemon = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0';

const getPokemonsApi = async () => {
	const pokemonApiUrl = await axios.get(ulr40Pokemon);
	const arrayPromise = await pokemonApiUrl?.data.results.map((element) => {
		return axios.get(element.url);
	});
	const promiseData = await Promise.all(arrayPromise);
	const pokeInfo = promiseData?.map((element) => element.data);
	const pokeInfoFiltered = pokeInfo?.map((element) => {
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

const getPokemonsName = async (name, info) => {
	const pokemonFilter = info?.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(name.toLowerCase())
	);
	if (!pokemonFilter.length) {
		throw new Error(`No se encontró un pokemon con el nombre ${name}`);
	}
	return pokemonFilter;
};

const getPokemonsId = async (id) => {
	const pokeInfo = await getAllPokemons();
	const findPokemon = pokeInfo?.find((pokemon) => pokemon.id.toString() === id);
	if (!findPokemon)
		throw new Error(`El pokemon con id ${id} no fue encontrado`);

	return findPokemon;
};

const typesInDb = async () => {
	const apiTypes = await axios.get('https://pokeapi.co/api/v2/type');
	const pokeInfo = apiTypes.data.results.map((type) => type.name);
	pokeInfo.forEach((pokemonType) => {
		Type.findOrCreate({
			where: { name: pokemonType },
		});
	});
	const dbTypes = await Type.findAll();
	return dbTypes;
};

const pokeCreate = async (body) => {
	const { name, hp, attack, defense, speed, height, weight, type } = body;
	// if ((!name, !hp, !attack, !defense, !speed, !height, !weight, !type)) {
	// }
	let newPokemon = await Pokemon.create({
		name,
		hp,
		attack,
		defense,
		speed,
		height,
		weight,
	});
	const pokeType = await Type.findAll({
		where: {
			name: type,
		},
	});
	newPokemon.addType(pokeType);
	return Pokemon.findAll();
};

module.exports = {
	getAllPokemons,
	getPokemonsId,
	getPokemonsName,
	typesInDb,
	pokeCreate,
};

/*
{
	"name": "jose",
	"hp": 100,
	"attack": 50,
	"defense": 60,
	"speed": 50,
	"height":40,
	"weight": 50,
	"type": ["normal", "poison"]
}
*/
