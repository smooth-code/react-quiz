import path from 'path'
import convict from 'convict'

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['production', 'development', 'test', 'browser.development'],
    default: 'development',
    env: 'NODE_ENV',
  },
  github: {
    clientID: {
      doc: 'GitHub application client ID',
      format: String,
      default: '',
      env: 'GITHUB_CLIENT_ID',
    },
    clientSecret: {
      doc: 'GitHub application client secret',
      format: String,
      default: '',
      env: 'GITHUB_CLIENT_SECRET',
    },
    callbackURL: {
      doc: 'GitHub application client secret',
      format: 'url',
      default: 'http://127.0.0.1:3000/auth/github/callback',
    },
  },
})

const env = config.get('env')
config.loadFile(path.join(__dirname, `../config/${env}.json`))
config.validate()

export default config
