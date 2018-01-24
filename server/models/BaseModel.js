import { Model } from 'objection'

export function mergeSchemas(...schemas) {
  return schemas.reduce(
    (mergedSchema, schema) => ({
      ...mergedSchema,
      ...schema,
      required: [...mergedSchema.required, ...schema.required],
      properties: {
        ...mergedSchema.properties,
        ...schema.properties,
      },
    }),
    {
      required: [],
      properties: {},
    },
  )
}

export default class BaseModel extends Model {
  // Uses http://json-schema.org/latest/json-schema-validation.html
  static jsonSchema = {
    type: 'object',
    required: [],
    properties: {
      id: { type: 'string' },
      created_at: { type: 'date' },
      updated_at: { type: 'date' },
    },
  }

  // Centralize the models.
  static modelPaths = [__dirname]

  // http://vincit.github.io/objection.js/#defaulteageralgorithm
  // static defaultEagerAlgorithm = Model.JoinEagerAlgorithm

  // Used by objection-rest
  static getFullIdColumn() {
    return 'id'
  }
}
