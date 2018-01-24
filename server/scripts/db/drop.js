import { exec } from 'mz/child_process'
import config from 'server/config'

if (config.get('env') === 'production') {
  throw new Error('Not in production please!')
}

const travis = process.env.TRAVIS === 'true'

const command = travis
  ? `dropdb --username postgres ${config.get('env')} --if-exists`
  : `docker-compose run postgres dropdb --host postgres --username postgres ${config.get(
      'env',
    )} --if-exists`

exec(command).catch(err => {
  setTimeout(() => {
    throw err
  })
})
