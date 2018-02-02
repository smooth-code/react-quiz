import config from 'server/config'
import { Strategy as GitHubStrategy } from 'passport-github2'
import { createUserFromGitHubProfile } from 'server/services/github'
import passport from 'passport'

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
passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

export const ensureAuthenticated = (req, res, next) =>
  req.isAuthenticated() ? next() : res.redirect('/')

export default passport
