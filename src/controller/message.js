const { status, send } = require('server/reply')
const admin = require('../libs/admin');

class MessageController {

    /**
     * 发送消息
     *
     * @param string topic
     * @param object data
     * @param object notification
     * @return json
     * @see https://firebase.google.com/docs/cloud-messaging/admin/send-messages?hl=zh-cn
     */
    async send(ctx) {
        try {
            const message = {
                topic: ctx.data.topic,
                webpush: {
                    data: ctx.data.data || {},
                    notification: ctx.data.notification || {}
                }
            }
            console.log(ctx.data)

            await admin.messaging()
                .send(message)
                .then((res) => {
                    console.log('Successfully sent message: ', res)
                })

            return send({status: true})
        } catch (e) {
            console.log('Exception: ' + e.message)
            return send({status: false, message: e.message})
        }

        return send({'status': false})
    }

}

module.exports = new MessageController()
