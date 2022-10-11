const axios = require('axios');
const { Pokemon, Type } = require('../db');

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
			speed: element.stats[5].base_stat,
			height: element.height,
			weight: element.weight,
		};
	});
	return pokeInfoFiltered;
};

const getPokemonDb = async () => {
	const pokeInfoDb = await Pokemon.findAll({
		attributes: { exclude: ['crateInDb'] },
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
	const pokemonFind = info?.find(
		(pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
	);
	if (!pokemonFind) {
		throw new Error(`No se encontró un pokemon con el nombre ${name}`);
	}
	return pokemonFind;
	//Preguntar si es exactamente igual o si puede devolver-> char = charmander,charizar, etc
	// const pokemonFilter = info?.filter((pokemon) =>
	// 	pokemon.name.toLowerCase().includes(name.toLowerCase())
	// );
	// if (!pokemonFilter.length) {
	// 	throw new Error(`No se encontró un pokemon con el nombre ${name}`);
	// }
	// return pokemonFilter;
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
	const pokeInfo = await apiTypes.data.results.map((type) => {
		return {
			name: type.name,
		};
	});
	//Otra forma de hacerlo
	// pokeInfo.forEach((pokemonType) => {
	// 	Type.findOrCreate({
	// 		where: { name: pokemonType },
	// 	});
	// });
	// console.log(pokeInfo);
	await Type.bulkCreate(pokeInfo);
	const dbTypes = await Type.findAll();
	return dbTypes;
};

const pokeCreate = async (body) => {
	const { name, hp, attack, defense, speed, height, weight, type } = body;
	if ((!name, !hp, !type)) throw new Error('Faltan datos');

	//Compruebo que no tengan nombres repetidos(Adicional, preguntar asi se puede)
	const allPokemons = await getAllPokemons();
	const pokemonFind = allPokemons?.find(
		(pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
	);
	if (pokemonFind)
		throw new Error(
			`No se pueden crear el pokemon ${name} debido a que ya existe un pokemon con ese nombre`
		);
	// ------------------------> Posiblemente toque borrar si no es permitido

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
	await newPokemon.addType(pokeType);
	const id = newPokemon.id;
	return await Pokemon.findByPk(newPokemon.id, {
		attributes: { exclude: ['crateInDb'] },
		include: {
			model: Type,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		},
	});
};

module.exports = {
	getAllPokemons,
	getPokemonsId,
	getPokemonsName,
	typesInDb,
	pokeCreate,
};
