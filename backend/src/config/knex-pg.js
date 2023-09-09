const pgConfig = {
    development: {
        client: 'pg',
        connection:{
            host: 'dpg-cjeft03bq8nc73efhvi0-a.oregon-postgres.render.com',
            user: 'root',
            password: 'WjwIfc5diku65O5cBY4sY6hFjAJR27ox',
            database: 'auxiliatron_xj6e',
            ssl: {rejectUnauthorized: false}
        }
    }
}

module.exports = pgConfig ;