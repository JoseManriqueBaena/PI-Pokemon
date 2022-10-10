const { Router } = require('express');
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRoutes = require('./pokemon');
const tipoRoutes = require('./type');

const router = Router();

router.use('/pokemons', pokemonRoutes);
router.use('/types', tipoRoutes);

// router.get('/pokemons', async (req, res) => {
// 	const pokemonApiUrl = await axios.get(
// 		'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
// 	);
// 	const pokemonInfo = await pokemonApiUrl.data;
// 	res.status(200).json(pokemonInfo);
// });

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
