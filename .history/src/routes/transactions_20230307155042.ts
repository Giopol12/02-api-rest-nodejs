import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import z from 'zod'
import { randomUUID } from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async () => {})
  app.post('/', async (request, reply) => {
    const CreateTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })
    const { amount, title, type } = CreateTransactionBodySchema.parse(
      request.body,
    )
    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })
    return reply.status(201).send()
  })
}
