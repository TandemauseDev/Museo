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

// app.js
import express from "express";
import cors from "cors";

import db from "./database/db.js";
import router from "./routes/routes.js";

const app = express();

// Configurar CORS y JSON
app.use(cors());
app.use(express.json());

// Configuración de rutas con prefijos
app.use('/events', router);  // Prefijo para rutas de eventos
app.use('/auth', router);    // Prefijo para rutas de autenticación

// Conectar a la base de datos
try {
    await db.authenticate();
    console.log('Conexión exitosa a la DB');
} catch (error) {
    console.log(`El error es: ${error}`);
}

// Iniciar el servidor
app.listen(8000, () => {
    console.log('Server up and running in http://localhost:8000/');
});

