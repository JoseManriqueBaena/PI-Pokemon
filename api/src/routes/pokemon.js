const axios = require('axios');
const { Router } = require('express');
const { Pokemon } = require('../models/Pokemon');
const controlers = require('../controllers/Controllers');
const router = Router();

router.get('/', async (req, res) => {
	const pokeInfo = await controlers.getAllPokemons();
	res.status(200).json(pokeInfo);
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const pokeInfo = await controlers.getPokemonsId(id);
		// console.log(pokeInfo);
		res.json(pokeInfo);
	} catch (error) {
		res.status(402).send(error.message);
	}
});

module.exports = router;
