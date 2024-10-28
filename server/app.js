// const express = require("express");
// const app = express();
// const cors = require("cors");
// const corsOptions = {
//     origin: ["http://localhost:5173"]
// }
// app.use(cors(corsOptions));

// app.get("/api", (req, res)=>{
//     res.json({fruits: ["apple", "banana"]})
// })

// app.listen(8080, () => {
//     console.log("server started on port 8080")
// });


import express from "express"; // Cambia "e" por "express"
import cors from 'cors';

import db from "./database/db.js";
import router from "./routes/routes.js";


const app = express();

app.use(cors());
app.use(express.json()); // Usar express.json() directamente

// Cambiar la ruta a '/events'
app.use('/events', router); // Usar '/events' para las rutas de eventos

try {
    await db.authenticate();
    console.log('Conexión exitosa a la DB');
} catch (error) {
    console.log(`El error es: ${error}`);
}

// app.get('/', (req, res) => {
//     res.send('Hola mundo');
// });

app.listen(8000, () => {
    console.log('Server up and running in http://localhost:8000/');
});
