import { Pool } from 'pg';
// eslint-disable-next-line import/extensions
const { dbPassword } = require('../../.config/databaseConnection');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5433,
  password: dbPassword,
  database: 'products',
});

export default pool;
