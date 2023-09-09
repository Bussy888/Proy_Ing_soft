const knex = require("knex");
const pgConnection = require("../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const getUser = async () => {
  try {
    const users = await db("estudiantes").select("*");
    const usersJson = users.map((row) => ({
      id: row.id,
      nombre: row.nombre,
      semestre: row.semestre
    }));
    return usersJson;
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports = getUser ;
