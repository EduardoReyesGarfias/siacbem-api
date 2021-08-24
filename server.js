const express = require("express");
const app = express();
const port = 3001;

// Levantar servicio
app.listen(port, () => console.log('Arranco la app'));