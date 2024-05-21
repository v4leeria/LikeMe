const { pool } = require("../../db/connection.js");

class PostsModel {
  constructor() {}

  queryGetPosts = async () => {
    const sql = `SELECT * FROM posts`;
    const { rows } = await pool.query(sql);
    if (!rows) {
      throw { status: 404, message: "No hay datos que mostrar" };
    }
    return rows;
  };

  queryCreatePosts = async ({ titulo, img, descripcion, likes }) => {
    const values = [titulo, img, descripcion, likes];
    const sql = `INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)`;
    const { rowsCount } = await pool.query(sql, values);
    if (!rowsCount) {
      throw { status: 400, message: "No se puedo insertar post" };
    }
    return { status: 200, message: "Post creado con exito" };
  };

  //--------------------------------------Segundo desafío
  queryUptadePostsId = async () => {};

  queryDeletePostId = async () => {};
}

module.exports = new PostsModel();
