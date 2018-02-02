import BaseModel, { mergeSchemas } from './BaseModel'

export default class User extends BaseModel {
  static tableName = 'questions'

  static jsonSchema = mergeSchemas(BaseModel.jsonSchema, {
    required: ['question', 'choices', 'answer', 'time'],
    properties: {
      question: { type: 'string' },
      choices: { type: 'integer' },
      answer: { type: 'integer' },
      time: { type: 'time' },
    },
  })
}
