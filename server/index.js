import next from 'next'
import express from 'express'
import passport from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github2'
import { createUserFromGitHubProfile } from 'server/services/github'
import config from 'server/config'
import { connect as connectDatabase } from 'server/services/database'

connectDatabase()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

passport.use(
  new GitHubStrategy(
    config.get('github'),
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await createUserFromGitHubProfile({ profile, accessToken })
        done(null, user)
      } catch (e) {
        done(e)
      }
    },
  ),
)

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(passport.initialize())
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
        session: false,
      }),
      (req, res) => {
        res.redirect('/')
      },
    )

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
