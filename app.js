//app.js
App({
  //全局数据
  globalData: {
    url : "https://whuyuefan.info",
    openId : null,
    nickName : null,
    avatarUrl : null,
  },

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.checkSession({
      fail: this.login(this.globalData)
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
		if (capsule) {
		 	this.globalData.Custom = capsule;
			this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
		} else {
			this.globalData.CustomBar = e.statusBarHeight + 50;
		}
      }
    })
  },

    // 登录
  login: function (globalData) {
    wx.login({
      success(res){
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if(res.code) {

          wx.request({
            url: globalData.url + '/login',
            method: "POST",
            data:{
                "code":res.code
            },
            header: {
              'content-type': 'application/json'
            },
            success(result){
              var data = result.data;
              //用户非首次登录
              if(data.errcode == 1){
                globalData.openId = data.userInfo.openId;
                globalData.nickName = data.userInfo.nickname;
                globalData.avatarUrl = data.userInfo.avatarurl;
              }
              //用户首次登录
              if(data.errcode == 0){
                wx.getUserInfo({
                  withCredentials: true,
                  lang: "zh_CN",
                  success: (res) => {
                    wx.request({
                      url: globalData.url + '/login/register',
                      method: "POST",
                      data:{
                        "encryptedData": res.encryptedData,
                        "iv":res.iv
                      },
                      success: (res) => {
                        var data = res.data;
                        if(data.errcode == 1){
                          globalData.openId = data.openid;
                          globalData.nickName = data.nickname;
                          globalData.avatarUrl = data.avatarurl;
                        }
                      }
                    })
                  },
                })
              }
            }
          })
        }else{
          console.log("登陆失败："+res.errMsg)
        }
      }
    })
  },
})