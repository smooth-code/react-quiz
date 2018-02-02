import next from 'next'
import path from 'path'
import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import config from 'server/config'
import passport, { ensureAuthenticated } from './passport'
import { getCurrentQuestion, getNextQuestion, postAnswer } from './coreGameAPI'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(express.static(path.resolve(__dirname, '../public')))
    server.use(
      express.static(path.resolve(__dirname, '../node_modules/prismjs/themes')),
    )
    server.use(session(config.get('session')))
    server.use(bodyParser.json())
    server.use(passport.initialize())
    server.use(passport.session())

    server.get('/', (req, res) => {
      const actualPage = '/Home'
      app.render(req, res, actualPage)
    })

    server.get(
      '/auth/github',
      passport.authenticate('github', { scope: ['user:email'] }),
    )

    server.get(
      '/auth/github/callback',
      passport.authenticate('github', {
        successRedirect: '/',
        failureRedirect: '/',
      }),
      (req, res) => {
        res.redirect('/')
      },
    )
    server.get('/logout', (req, res) => {
      req.logout()
      res.redirect('/')
    })

    server.get('/ReactQuiz', ensureAuthenticated, (req, res) => {
      app.render(req, res, '/ReactQuiz')
    })

    server.get('/api/current', ensureAuthenticated, getCurrentQuestion)

    server.get('/api/next', ensureAuthenticated, getNextQuestion)

    server.post('/api/submit', ensureAuthenticated, postAnswer)

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) throw err
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    // eslint-disable-next-line no-console
    console.log(ex.stack)
    process.exit(1)
  })
