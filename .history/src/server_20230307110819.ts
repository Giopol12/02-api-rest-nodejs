import fastify from 'fastify'
import { knex } from './database'

const app = fastify()
app.get('/hello', async () => {
  const transaction = knex('transactions', {})
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
