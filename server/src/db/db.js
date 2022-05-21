const { Pool } = require("pg");
require("dotenv").config();

const devConfig = {
  /* Macbook: */
  // user: "chris",
  // database: "vending_machine_v2_database",
  user: "postgres",
  password: "psql2022",
  database: "vending_machine",
  host: "localhost",
  port: "5432",
};

const pool = new Pool(devConfig);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
