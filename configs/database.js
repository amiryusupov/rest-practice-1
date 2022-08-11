import pg from "pg"

export const client = new pg.Client({
    host: "localhost",
    user: "postgres",
    database: "practice",
    port: 5432,
    password: "root"
})

client.connect()