import BaseModel, { mergeSchemas } from './BaseModel'

export default class User extends BaseModel {
  static tableName = 'users'

  static jsonSchema = mergeSchemas(BaseModel.jsonSchema, {
    required: ['name', 'login', 'email', 'github_id', 'access_token'],
    properties: {
      name: { type: 'string' },
      login: { type: 'string' },
      email: { type: 'string' },
      github_id: { type: 'string' },
      access_token: { type: 'string' },
    },
  })
}
