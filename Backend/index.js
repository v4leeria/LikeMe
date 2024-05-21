const express = require("express");
//cors es un middleware
const cors = require("cors");
const app = express();
const routes = require("./src/routes/routes.js");
require("dotenv").config({ path: "server.env" });
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
//use por defecto el / y que use las rutas
app.use("/", routes);

app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
