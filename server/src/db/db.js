const { Pool } = require("pg");
// require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const devConfig = {
  user: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_NAME,
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT,
};

// console.log(process.env.NODE_ENV);

const pool = new Pool(
  isProduction
    ? {
        connectionString: process.env.DATABASE_URL,
      }
    : devConfig
);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
