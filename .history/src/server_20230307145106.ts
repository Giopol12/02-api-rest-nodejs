import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()
transactionsRoutes(app)
app
  .listen({
    port: env.port,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
