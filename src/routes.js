const { get, post, error} = require('server/router')
const { status } = require('server/reply')

const topic = require('./controller/topic')
const message = require('./controller/message')

module.exports = [
    get('/', ctx => 'Hello world!'),
    post('/topic', async ctx => { return await topic.subscribe(ctx) }),
    post('/message', async ctx => { return await message.send(ctx) }),
    error(ctx => status(500).send(ctx.error.message))
]
