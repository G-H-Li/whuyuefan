// pages/mainpage/mainpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    items: [{
      title:"渣男聚会",
      place:"海底捞",
      memberNum:10,
      date:"2016-1-1",
    },
  {
    title:"渣女聚会",
    place:"星湖园",
    memberNum:4,
    date:"2018-12-1",
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})