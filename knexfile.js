/* eslint-disable global-require */
const workers = 3
const maxConnectionsAllowed = 20
const freeConnectionsForThierdTools = 2

const config = {
  development: {
    debug: false,
    client: 'postgresql',
    connection: {
      user: 'postgres',
      database: 'development',
      timezone: 'utc',
    },
    seeds: {
      directory: './seeds',
    },
  },
  test: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      database: 'test',
      timezone: 'utc',
    },
  },
  production: {
    client: 'postgresql',
    pool: {
      min: 2,
      max: Math.floor(
        (maxConnectionsAllowed - freeConnectionsForThierdTools) / workers,
      ),
    },
  },
}

if (process.env.DATABASE_URL) {
  const url = require('url')
  const pgProd = url.parse(process.env.DATABASE_URL)

  config.production.connection = {
    host: pgProd.hostname,
    port: pgProd.port,
    user: pgProd.auth.split(':')[0],
    password: pgProd.auth.split(':')[1],
    database: pgProd.path.substring(1),
    ssl: true,
    timezone: 'utc',
  }
}

module.exports = config
