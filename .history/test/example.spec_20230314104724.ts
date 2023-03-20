import { test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

afterAll(async () => {
  await app.close()
})
test('o úsuario deve poder criar uma transação', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New transaction',
      amount: 1,
      type: 'credit',
    })
    .expect(201)
})
