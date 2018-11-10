const { status, send } = require('server/reply')
const admin = require('../libs/admin');

class TopicController {

    /**
     * 订阅主题
     *
     * @param string topic 主题名称
     * @param string token 登记令牌
     * @return json
     * @see https://firebase.google.com/docs/cloud-messaging/admin/manage-topic-subscriptions?hl=zh-cn
     */
    async subscribe(ctx) {
        try {
            console.log(ctx.data)

            await admin.messaging()
                .subscribeToTopic(ctx.data.token, ctx.data.topic)
                .then(function(res) {
                    console.log(ctx.data.topic, res)
                    if (res.errors.length) {
                        throw new Error(res.errors[0].error.errorInfo.message)
                    }
                })

            return send({status: true})
        } catch (e) {
            console.log('Exception: ' + e.message)
            return send({status: false, message: e.message})
        }
    }

}

module.exports = new TopicController()
