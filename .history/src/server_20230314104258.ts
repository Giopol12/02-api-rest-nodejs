import { app } from './app'
import { env } from './env'
import request from 'supertest'
app
  .listen({
    port: env.port,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
