import next from 'next'
import express from 'express'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use((req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    /* eslint-disable no-console */
    console.log(`> Ready on http://localhost:${port}`)
    /* eslint-enable no-console */
  })
})
