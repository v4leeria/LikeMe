const express = require("express");
const posts = require("../controllers/controller.js");
const router = express.Router();

//Rutas de obtencion
//usamos la ruta /posts y la función getPosts dentro de la clase PossController instanciada en la variable post que se conecta con controller.js
router.get("/posts", posts.getPosts);

//Ruta de creacion
router.post("/posts", posts.createPost);

//--------------------------------------Segundo desafío

//Rutas de modificación
router.patch("/posts/:id");
router.delete("/posts/:id");

module.exports = router;
