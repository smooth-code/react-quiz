import User from 'server/models/User'

const getDataFromProfile = (profile, accessToken) => ({
  name: profile.displayName,
  login: profile.username,
  github_id: profile.id,
  email: profile.emails[0].value,
  access_token: accessToken,
})

export const createUserFromGitHubProfile = async ({ profile, accessToken }) => {
  const data = getDataFromProfile(profile, accessToken)
  const existingUser = await User.query()
    .where({ github_id: data.github_id })
    .limit(1)
    .first()
  return existingUser
    ? existingUser.$query().patchAndFetch(data)
    : User.query().insert(data)
}
