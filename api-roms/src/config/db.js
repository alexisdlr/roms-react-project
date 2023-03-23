import { createPool } from "mysql2/promise";

import { HOST, USER, PASS, DB_PORT, DATABASE } from './config.js'

export const pool = createPool({
  host: HOST,
  user: USER,
  password: PASS,
  port: DB_PORT,
  database: DATABASE
})

