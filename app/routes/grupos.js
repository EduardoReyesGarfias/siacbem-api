const express = require('express');
const router = express.Router();
const controller = require("../controllers/grupos");

const path = '/grupos/';

// /grupos/
router.get(`${path}`, controller.getGrupos);

router.get(`${path}subprograma/:_id`, controller.getGruposBySubprograma);
module.exports = router;