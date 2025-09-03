import pgPromise from "pg-promise";

const pgp = pgPromise({})

const db = pgp({
    user : "postgres",
    password : "1234",
    host : "localhost",
    port: 5432,
    database : "tondeldb",
    idleTimeoutMillis: 100
})

export default db;