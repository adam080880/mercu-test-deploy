import knex from "knex";
import {config} from 'dotenv';

config();
const ENV = process.env;

const db = knex({
  client: 'mysql2',
  connection: {
    host: ENV.MYSQL_HOST,
    port: +(ENV.MYSQL_PORT as string),
    user: ENV.MYSQL_USER,
    password: ENV.MYSQL_PASS,
    database: ENV.MYSQL_DB
  }
});

export default db;
