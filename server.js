const express = require('express');
const app = express();
const port = 3001;

// Rutas
const gruposRoutes = require('./app/routes/grupos.route');
const subprogramasRoutes = require('./app/routes/subprogramas.route');


app.use(gruposRoutes);
app.use(subprogramasRoutes);

app.listen(port, () => console.log('La app esta corriendo'));