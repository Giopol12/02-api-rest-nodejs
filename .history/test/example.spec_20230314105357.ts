import { describe, it, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'
import {} from 'node:test'

describe('Transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })
  it('user can create a new transaction', async () => {
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
