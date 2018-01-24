import useDatabase from 'server/test/useDatabase'
import User from 'server/models/User'
import { createUserFromGitHubProfile } from './github'
import githubProfile from './__fixtures__/githubProfile'

describe('#createUserFromGitHubProfile', () => {
  useDatabase()

  it('should create a user if not created', async () => {
    const user = await createUserFromGitHubProfile({
      profile: githubProfile,
      accessToken: 'ONE_TOKEN',
    })
    const users = await User.query()
    expect(users.length).toBe(1)
    expect(user.name).toBe('Jeason')
    expect(user.github_id).toBe('20687432')
    expect(user.email).toBe('jsn.centaure@gmail.com')
    expect(user.access_token).toBe('ONE_TOKEN')
  })

  describe('with a existing user', () => {
    beforeEach(async () => {
      await User.query().insert({
        name: 'James',
        login: 'james',
        github_id: '20687432',
        email: 'james@email.com',
        access_token: 'JAMES_TOKEN',
      })
    })

    it('should update user', async () => {
      const user = await createUserFromGitHubProfile({
        profile: githubProfile,
        accessToken: 'ONE_TOKEN',
      })
      const users = await User.query()
      expect(users.length).toBe(1)
      expect(user.name).toBe('Jeason')
      expect(user.github_id).toBe('20687432')
      expect(user.email).toBe('jsn.centaure@gmail.com')
      expect(user.access_token).toBe('ONE_TOKEN')
    })
  })
})
