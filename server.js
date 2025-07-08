const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('server.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

server.use(middlewares)

server.get('/healthz', (req, res) => {
  res.sendStatus(204)
})

server.use(router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`)
})
