const posts = require("../models/model.js");

//crear clase como almacenador de funciones, osea PostsController guarda harttas funciones
class PostsControllers {
  constructor() {}

  getPosts = async (req, res) => {
    try {
      const response = await posts.queryGetPosts();

      res.json(response);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  };

  createPost = async (req, res) => {
    try {
      //payload es lo que contiene el requerimiento que en este caso viene por body
      //req.body es el objeto de la peticion en este caso post que se guarda en payload
      //   const payload = req.body;

      const response = await posts.queryCreatePosts(req.body);
      res.status(200).json(response);
    } catch (error) {
      res.json({
        error: error,
      });
    }
  };

  //--------------------------------------Segundo desafío

  updatePostsById = async (req, res) => {};

  deletePostById = async (req, res) => {};
}
//Siempre se eporta solo la clase
module.exports = new PostsControllers();
