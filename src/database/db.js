"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// eslint-disable-next-line import/extensions
const { dbPassword } = require('../../.config/databaseConnection');
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5433,
    password: dbPassword,
    database: 'products',
});
exports.default = pool;
//# sourceMappingURL=db.js.map