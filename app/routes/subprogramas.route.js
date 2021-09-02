const express = require('express');
const controller = require('../controllers/subprogramas.controller');
const router = express.Router();
const path = '/subprogramas/';

/** Middlewears **/

// Ruta /subprogramas/
router.get(`${path}`, controller.getSubprogramas);

// Ruta /subprogramas/id/
router.get(`${path}id/:_id`, controller.getSubprogramaById);

// Ruta /subprogramas/nombre/
router.get(`${path}nombre/:_nombre`, controller.getSubprogramaByName);

// Ruta /subprogramas/clave/
router.get(`${path}clave/:_clave`, controller.getSubprogramaByClave);

module.exports = router;