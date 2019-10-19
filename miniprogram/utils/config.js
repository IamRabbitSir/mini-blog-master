/**
 * 打赏二维码
 */
var moneyUrl ="../images/WechatIMG66.jpeg"

/**
 * 公众号二维码
 */
var wechatUrl ="../images/WechatIMG62.jpeg"

/**
 * 云开发环境
 */
var env ="cloundfunction-4da0f1"
/**
 * 个人文章操作枚举
 */
var postRelatedType = {
    COLLECTION: 1,
    ZAN: 2,
    properties: {
        1: {
            desc: "收藏"
        },
        2: {
            desc: "点赞"
        }
    }
};

module.exports = {
    postRelatedType: postRelatedType,
    moneyUrl:moneyUrl,
    wechatUrl:wechatUrl,
    env:env
}