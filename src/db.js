// create connection database Postgres
import  pg  from "pg";

const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "039227",
  database: 'tasksdb'
});

//Displays a message to connect to the database
pool.on("connect", () => {
   console.log("Creating database connection");
});

export default pool