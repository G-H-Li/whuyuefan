// pages/mainpage/mainpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      theme:"儿童节聚餐",
      place:"海底捞",
      memberNum:10,
      date:"2020-6-1",
      time:"17:00",
      state:0,
    },
    {
      theme:"生日聚会",
      place:"江南小观园",
      memberNum:8,
      date:"2020-5-20",
      time:"8:00",
      state:1,
    },
    {
      theme:"大作业誓师会",
      place:"东北饺子馆",
      memberNum:4,
      date:"2020-5-1",
      time:"10:00",
      state:2,
    },
  {
    theme:"渣女聚会",
    place:"星湖园",
    memberNum:4,
    date:"2018-12-1",
    time:"10:00",
    state:-1,
  }],

  },

  jumpToCreate(e){
    wx.navigateTo({
      url: '/pages/createmeal/createmeal',
    })
  },

  jumpToJoin(e){
    wx.navigateTo({
      url: '/pages/joinmeal/joinmeal',
    })
  },

  TimelineNavigator(e){
    if(e.currentTarget.dataset.state == 0 || e.currentTarget.dataset.state == 1){
      this.jumpToGroup();
    }
    if(e.currentTarget.dataset.state == 2)
    {
      this.jumpToDiary();
    }
  },

  //跳转至群组
  jumpToGroup(){
    wx.navigateTo({
      url: '/pages/group/group',
    })
  },
  //跳转至日志页面
  jumpToDiary(){
    wx.navigateTo({
      url: '/pages/diary/diary',
    })
  },

  onShareAppMessage: function (){
    return {
      title: '一个神奇的约饭小程序',
      imageUrl: '/image/basicprofile.png',
      path:'/pages/mainpage/mainpage'
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
})