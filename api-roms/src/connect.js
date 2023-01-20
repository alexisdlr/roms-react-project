import { createPool } from "mysql2/promise";
import { DATABASE, DB_PORT, HOST, PASS, USER } from "./config.js";
export const pool = createPool({
  host: HOST,
  user: USER,
  password: PASS,
  port: DB_PORT,
  database: DATABASE
})