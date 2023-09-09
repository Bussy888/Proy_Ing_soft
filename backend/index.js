const express = require('express');
const routes = require('./src/routes/api');
const cors = require('cors');
//creadno el servidor
const app = express();
app.use(cors());
//Leer contenido json detntro del body
app.use(express.json());

//creando API
app.use("/api", routes);

const PORT = 3000; //TODO crear enviroments

app.listen(PORT, () => {
    console.log("El servidor se ha levantadao correctamente en el puerto ", PORT);
})