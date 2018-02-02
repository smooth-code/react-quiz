import { connect as connectDatabase } from 'server/services/database'

const knex = connectDatabase()

const getLastQuestionInfo = async userId => {
  try {
    const { length } = await knex('questions')
    const info = await knex
      .select('question_id as id', 'created_at')
      .from('users_questions')
      .where({
        user_id: userId,
      })
      .orderBy('question_id', 'desc')
      .first()
    return (
      { ...info, length } || {
        id: null,
        created_at: null,
        length,
      }
    )
  } catch (error) {
    return {
      id: null,
      created_at: null,
    }
  }
}

const finalScore = async userId => {
  try {
    const totalScore = (await knex('questions')).length
    const userScore = (await knex('users_questions')
      .where('user_id', userId)
      .join('questions', 'id', 'question_id')
      .select('answer', 'user_choice')
      .whereRaw('user_choice = answer')).length
    return { totalScore, userScore }
  } catch (error) {
    return error
  }
}

export const getCurrentQuestion = async (req, res) => {
  try {
    const questionInfo = await getLastQuestionInfo(req.user.id)
    const data = await knex('questions')
      .select('question', 'choices', 'time', 'id')
      .where({ id: Number(questionInfo.id) || -1 })
    res.send({ ...data[0], length: questionInfo.length })
  } catch (error) {
    res.send(error)
  }
}

export const getNextQuestion = async (req, res) => {
  try {
    const questionInfo = await getLastQuestionInfo(req.user.id)
    if (questionInfo.id >= questionInfo.length) {
      res.send({ score: await finalScore(req.user.id) })
      return
    }
    const nextQuestionId = questionInfo.id ? Number(questionInfo.id) + 1 : 1
    const data = await knex
      .select('question', 'choices', 'time', 'id')
      .from('questions')
      .where({ id: nextQuestionId })
    await knex('users_questions').insert({
      user_id: req.user.id,
      question_id: nextQuestionId,
    })
    res.send({ ...data[0], length: questionInfo.length })
  } catch (error) {
    res.send(error)
  }
}

export const postAnswer = async (req, res) => {
  const { choice } = req.body
  try {
    const now = knex.fn.now()
    const questionId = await knex('users_questions')
      .where({
        user_id: req.user.id,
        'users_questions.user_choice': null,
      })
      .join('questions', 'question_id', 'id')
      .whereRaw('?? < ?? + ??', [
        now,
        'users_questions.created_at',
        'questions.time',
      ])
      .orderBy('users_questions.question_id', 'DESC')
      .first()
    if (questionId)
      await knex('users_questions')
        .where({
          user_id: req.user.id,
          question_id: questionId.id,
        })
        .update({
          user_choice: choice,
          updated_at: now,
        })
    res.send('it wordked')
  } catch (error) {
    res.send(error)
  }
}
