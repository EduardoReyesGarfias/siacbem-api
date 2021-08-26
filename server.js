const express = require('express');
const app = express();
const port = 3001;

// Rutas
const gruposRoutes = require('./app/routes/grupos.route');

app.use(gruposRoutes);

app.listen(port, () => console.log('La app esta corriendo'));