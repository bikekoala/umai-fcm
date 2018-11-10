const server = require('server')
const routes = require('./src/routes')

server(routes).then(ctx => {
    console.log('listening:', ctx.options.port)
}).catch(e => {
    console.log(e.stack)
})
