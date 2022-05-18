module.exports = {
    "config":[{
        "notice":false//推送信息,true为发生,false反之
    }],
    "user_data":[
        {
        "手机号":"",//手机号
        "密码":"",//密码
        "token":"",//不需要填写
        "userId":""//不需要填写
        "VIP":0,//vip用户填1,普通0,普通用户也可以填1,这个关于做任务延时,1为10秒,0为60秒
        "DEVICEID":"123456789",//抓包https://tcb-api.tencentcloudapi.com在请求体找,(可空不填)
        "UA":"Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/27.272728)"//抓包的请求头user-agent值(可空)
        },/*{
        "手机号":"",//水晶登录的手机号
        "密码":",//水晶登录的密码
        "token":"",//不需要填写
        "userId":""//不需要填写
        "VIP":0,//vip用户填1,普通0,普通用户也可以填1,这个关于做任务延时,1为10秒,0为60秒
        "DEVICEID":"123456789",//抓包https://tcb-api.tencentcloudapi.com在请求体找,(可空不填)
        "UA":""//抓包的请求头user-agent值(可空)
        },*/

]}
