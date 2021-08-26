const express = require('express');
const router = express.Router();
const controller = require("../controllers/grupos.controller");

const path = '/grupos/';

/** Middlewears **/

//  Ruta -> /grupos/
router.get(`${path}`, controller.getGrupos);
//  Ruta -> /grupos/subprograma/id
router.get(`${path}subprograma/:_id`, controller.getGruposBySubprograma);
module.exports = router;