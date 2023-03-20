import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  if (!sessionId) {
    return reply.status(401).send({
      error: 'Unauthorized',
    })
  }
}
