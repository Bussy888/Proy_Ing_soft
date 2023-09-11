require("dotenv").config();
const pgConfig = {
  development: {
    client: "pg",
    connection: {
      //TODO: jalar desde local ENV
      host: "dpg-cjeft03bq8nc73efhvi0-a.oregon-postgres.render.com",
      user: "root",
      password: "WjwIfc5diku65O5cBY4sY6hFjAJR27ox",
      database: "auxiliatron_xj6e",
      ssl: { rejectUnauthorized: true },
    },
    migrations: {
      directory: '../db/migrations'
    },
  },
};

module.exports = pgConfig;
