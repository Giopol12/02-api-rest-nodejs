import fastify from 'fastify';
const app = fastify()
app.get('/hello',()=>{
    const hello = 'hbeleza mane'
    return hello
})
app.listen({
    port:3333,
}).then(()=>{
    console.log('Server is running')
})