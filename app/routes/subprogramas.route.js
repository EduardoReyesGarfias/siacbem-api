const express = require('express');
const controller = require('../controllers/subprogramas.controller');
const router = express.Router();
const path = '/subprogramas/';

/** Middlewears **/

// Ruta /subprogramas/
router.get(`${path}`, controller.getSubprogramas);

module.exports = router;