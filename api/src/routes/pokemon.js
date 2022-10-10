const axios = require('axios');
const { Router } = require('express');
const { Pokemon } = require('../models/Pokemon');
const controlers = require('../Controllers/Controlers');
const router = Router();

router.get('/', async (req, res) => {
	const pokeInfo = await controlers.getPokemonsApi();
	console.log(pokeInfo);
	res.status(200).json(pokeInfo);
});

module.exports = router;
