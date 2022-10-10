const axios = require('axios');

// const getPokemonsApi = async () => {
// 	const pokemonApiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon');
// 	return pokemonApiUrl.data;
// };

async function getPokemonsApi() {
	const pokemonApiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon');
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
}

module.exports = {
	getPokemonsApi,
};
