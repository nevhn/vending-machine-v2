const { Pool } = require("pg");
require("dotenv").config();

const devConfig = {
  user: "postgres",
  password: "postgres",
  database: "vending_machine",
  host: "localhost",
  port: "5432",
};

const pool = new Pool(devConfig);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
