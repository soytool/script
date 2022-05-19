module.exports = {
    "config":[{
        "notice":false//推送信息,true为发生,false反之
    }],
    "user_data":[
        {
        "phone":"",//手机号
        "password":"",//密码
        "userId":"",//不填或抓包https://tcb-api.tencentcloudapi.com在请求体找
        "token":"",//不填或抓包https://tcb-api.tencentcloudapi.com在请求体找
        "VIP":0,//vip用户填1,非vip填0,非vip也可以填1,广告间隔也是10秒,可能封号极高
        "DEVICEID":"5acfc0ac057c4172",//不填或抓包https://tcb-api.tencentcloudapi.com在请求体找
        "UA":"Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/27.272728)"//不填或抓包的请求头user-agent值
        },/*{
        "phone":"",//手机号
        "password":"",//密码
        "userId":"",//不填或抓包https://tcb-api.tencentcloudapi.com在请求体找
        "token":"",//不填或抓包https://tcb-api.tencentcloudapi.com在请求体找
        "VIP":0,//vip用户填1,非vip填0,非vip也可以填1,广告间隔也是10秒,可能封号极高
        "DEVICEID":"5acfc0ac057c4172",//不填或抓包https://tcb-api.tencentcloudapi.com在请求体找
        "UA":"Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/27.272728)"//不填或抓包的请求头user-agent值
        },*/
]}
