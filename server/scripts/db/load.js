/* eslint-disable max-len */
import { exec } from 'mz/child_process'
import config from 'server/config'

if (config.get('env') === 'production') {
  throw new Error('Not in production please!')
}

const travis = process.env.TRAVIS === 'true'

const command = travis
  ? `psql --username postgres ${config.get('env')} < db/structure.sql`
  : `docker exec -i \`docker-compose ps -q postgres\` psql --username postgres ${config.get(
      'env',
    )} < db/structure.sql`

exec(command).catch(err => {
  setTimeout(() => {
    throw err
  })
})
