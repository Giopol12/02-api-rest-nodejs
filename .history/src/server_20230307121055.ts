import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'
import { env } from './env'

const app = fastify()
app.get('/hello', async () => {
  // const transaction = knex('transactions')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: 'Transaction Test',
  //     amount: 100,
  //   })
  //   .returning('*')
  // return transaction
  const log = knex('transactions').where('amount', 1000).select('*')
  return log
})
app
  .listen({
    port: env.port,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
