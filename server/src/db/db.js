const { Pool } = require("pg");
require("dotenv").config();

const devConfig = {
  user: "chris",
  password: "postgres",
  database: "vending_machine_v2_database",
  host: "localhost",
  port: "5432",
};

const pool = new Pool(devConfig);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
