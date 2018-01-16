exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.bigincrements('id').primary()
    table.timestamps(false, true)
    table.string('name').notNullable()
    table.string('login').notNullable()
    table.string('email').notNullable()
    table.string('github_id').notNullable()
    table.string('access_token').notNullable()
  })

exports.down = knex => knex.schema.dropTableIfExists('users')
