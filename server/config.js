import path from 'path'
import convict from 'convict'

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['production', 'development', 'test', 'browser.development'],
    default: 'development',
    env: 'NODE_ENV',
  },
  chrome: {
    bin: {
      doc: 'Google Chrome binary',
      format: 'String',
      default: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      env: 'GOOGLE_CHROME_BIN',
    },
  },
  server: {
    externalUrl: {
      doc: 'The server external url',
      format: 'url',
      default: 'https://www.react-quiz.com',
    },
    port: {
      doc: 'The server port number',
      format: 'port',
      default: 8000,
      env: 'PORT',
    },
    logFormat: {
      doc: 'The morgan log format to use',
      format: ['dev', 'combined', 'common', 'short', 'tiny', ''],
      default: 'dev',
    },
  },
  sendgrid: {
    apiKey: {
      doc: 'SendDrid API key',
      format: String,
      default: '',
      env: 'SENDGRID_API_KEY',
    },
  },
})

const env = config.get('env')
config.loadFile(path.join(__dirname, `../../config/${env}.json`))
config.validate()

export default config
