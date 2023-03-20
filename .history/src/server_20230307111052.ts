import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()
app.get('/hello', async () => {
  const transaction = knex('transactions', {
    id: crypto.randomUUID(),
    title: 'Transaction Test',
    amount: 1000,
  })
  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
