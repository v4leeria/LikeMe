const posts = require("../models/model.js");

//crear clase como almacenador de funciones, o sea PostsController guarda harttas funciones
class PostsControllers {
  constructor() {}

  getPosts = async (req, res) => {
    try {
      const response = await posts.queryGetPosts();
      res.send(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  createPost = async (req, res) => {
    try {
      //payload es lo que contiene el requerimiento que en este caso viene por body
      //req.body es el objeto de la peticion en este caso post que se guarda en payload
      //   const payload = req.body;

      const response = await posts.queryCreatePosts(req.body);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  //--------------------------------------Segundo desafío

  updatePostsById = async (req, res) => {
    try {
      //req.params captura datos de la url en este caso /id
      const { id } = req.params;
      console.log(id);
      await posts.queryUptadePostsId(id);
      res.status(200).json({ message: "Le diste like" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  deletePostById = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await posts.queryDeletePostId(id);
      res.status(200).json(response.message);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
//Siempre se exporta solo la clase
module.exports = new PostsControllers();
