import { truncateAll } from 'server/dbUtils'
import * as database from 'server/services/database'

function useDatabase() {
  let knex

  beforeAll(async () => {
    knex = database.connect()
  })

  afterAll(async () => {
    await database.disconnect()
  })

  beforeEach(async () => {
    await truncateAll(knex)
  })
}

export default useDatabase
