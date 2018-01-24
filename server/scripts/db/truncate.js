import config from 'server/config'
import { connect, disconnect } from 'server/services/database'
import { truncateAll } from 'server/dbUtils'

if (config.get('env') === 'production') {
  throw new Error('Not in production please!')
}

const knex = connect()

truncateAll(knex)
  .then(() => {
    disconnect(knex)
  })
  .catch(err => {
    setTimeout(() => {
      throw err
    })
  })
