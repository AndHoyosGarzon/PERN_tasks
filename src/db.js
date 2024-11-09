// create connection database Postgres
import pg from "pg";

//import environment variables
import {
  PG_PORT,
  PG_HOST,
  PG_USER,
  PG_PASSWORD,
  PG_DATABASE,
} from "./config.js";

const pool = new pg.Pool({
  port: PG_PORT,
  host: PG_HOST,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE,
});

//Displays a message to connect to the database
pool.on("connect", () => {
  console.log("Creating database connection");
});

export default pool;
