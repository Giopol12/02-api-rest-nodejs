import { test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'
import { describe } from 'node:test'
beforeAll(async () => {
  await app.ready()
})
afterAll(async () => {
  await app.close()
})
describe('Transactions routes', () => {
  test('user can create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 1,
        type: 'credit',
      })
      .expect(201)
  })
})
