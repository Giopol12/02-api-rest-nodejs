import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

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
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
