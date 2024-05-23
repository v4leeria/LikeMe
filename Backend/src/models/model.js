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
    const sql = `INSERT INTO posts  VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *`;
    const { rowCount } = await pool.query(sql, values);
    console.log(rowCount);
    if (!rowCount) {
      throw { status: 400, message: "No se pudo insertar post" };
    }
    return { status: 200, message: "Post creado con exito" };
  };

  //--------------------------------------Segundo desafío
  queryUptadePostsId = async (id) => {
    const sql = `UPDATE posts SET likes = likes + 1 WHERE id = $1`;
    const { rowCount } = await pool.query(sql, [id]);
    if (!rowCount) {
      throw { status: 400, message: "No se pudo dar like" };
    }
    return { message: "Le diste like al post" };
  };

  queryDeletePostId = async (id) => {
    const sql = `DELETE FROM posts WHERE id = $1`;
    const { rowCount } = await pool.query(sql, [id]);
    if (!rowCount) {
      throw { status: 400, message: "No se pudo eliminar el post" };
    }
    return { message: "Se eliminó el post correctamente" };
  };
}

module.exports = new PostsModel();
