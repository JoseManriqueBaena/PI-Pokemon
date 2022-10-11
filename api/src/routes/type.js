const { Router } = require('express');
const { Type } = require('../db');
const controlers = require('../controllers/Controllers');
const router = Router();

router.get('/', async (req, res) => {
	const dbTypes = await Type.findAll();
	if (!dbTypes.length) return res.status(400).json('No se encontraron datos');
	res.json(dbTypes);
});

module.exports = router;
