// pages/joinmeal/joinmeal.js
// todo：提前访问后端获取相应初始值
var fanId = null;
var nickName = "";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    fanid: fanId,
    nickname: nickName
  },

  jumpToGroup(e){
    // 将相关数据传输到后端
    if(this.data.fanid != "" && this.data.nickname != "")
    {
      wx.navigateTo({
        url: '/pages/group/group',
      })
    }
  },

  FanidChange: function(e){
    this.setData({
      fanid: e.detail.value
    })
  },

  NicknameChange: function(e){
    this.setData({
      nickname: e.detail.value
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