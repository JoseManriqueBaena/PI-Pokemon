const axios = require('axios');
const { Router } = require('express');
const { Type } = require('../db');
const controlers = require('../controllers/Controllers');
const router = Router();

router.get('/', async (req, res) => {
	const dbTypes = await Type.findAll();
	res.json(dbTypes);
});

module.exports = router;
