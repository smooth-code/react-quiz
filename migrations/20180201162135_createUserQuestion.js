exports.up = knex =>
  knex.schema
    .createTable('questions', table => {
      table.integer('id').notNullable()
      table.text('question').notNullable()
      table.jsonb('choices').notNullable()
      table.integer('answer').notNullable()
      table.time('time').notNullable()
    })
    .createTable('users_questions', table => {
      table.timestamps(false, true)
      table.integer('user_id').notNullable()
      table.integer('question_id').notNullable()
      table.integer('user_choice')
    })

exports.down = knex =>
  knex.schema
    .dropTableIfExists('questions')
    .dropTableIfExists('users_questions')
