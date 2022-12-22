require("dotenv").config();
const { Client } = require("pg");

module.exports.getClient = async () => {
    const client = new Client({
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        ssl: true,
    });
    await client.connect();
    return client;
};
