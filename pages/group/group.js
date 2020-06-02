// pages/group/group.js
const chooseLocation = requirePlugin('chooseLocation');
const referer = "约饭吗";
const key = "TN7BZ-H4QK3-FSE3K-YOVHQ-O2YGF-IDFG4";
var location = null;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    btnPoll: false,
    btnPay: false,
    btnStart: false,
    btnQuit: false,

    fanInfo: {
      fanid:231231231123,
      date:"2020-6-2",
      time:"18:00",
      place:"武汉大学"
    },

    msgs:
    [
      {
        plainText:"时间修改为：",
        blueText:"12:00",
      },
      {
        plainText:"地点修改为：",
        blueText:"楚河汉街",
      },
      {
        plainText:"发起已投票,请尽快完成投票",
        blueText:"",
      },
      {
        plainText:"收款已发起,请尽快完成付款",
        blueText:"",
      },
      {
        plainText:"退出群组：",
        blueText:"渣男一号"
      },
      {
        plainText:"加入群组：",
        blueText:"渣男三号"
      },
      {
        plainText:"",
        blueText:"约饭正式开始，禁止退出群组"
      }
    ]
  },

  jump2Main: function()
  {
    wx.navigateBack({
      url: '/pages/mainpage/mainpage',
    })
  },

  jumpToLocationChoose(e){
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&category=美食',
    })
  },

  TimeChange(e) {
    //todo:向消息框添加消息，向后端发送请求
    var time = 'fanInfo.time';
    this.setData({
      [time]: e.detail.value,
      msgs: this.addMsg("时间修改为：", e.detail.value)
    })
  },

  DateChange(e) {
    //todo:向消息框添加消息，向后端发送请求
    var date = 'fanInfo.date';
    this.setData({
      [date]: e.detail.value,
      msgs: this.addMsg("日期修改为：", e.detail.value)
    })
  },

  //发起投票
  Poll(e) {
    this.showModal(e);
    this.setData({
      msgs: this.addMsg("投票已发起,请尽快完成投票", "")
    })
  },

  //发起AA付款
  Pay(e) {
    this.showModal(e);
    this.setData({
      msgs: this.addMsg("收款已发起,请尽快完成付款", "")
    })
  },
  //开始
  Start(e) {
    this.showModal(e);
  },

  StartFun(e) {
    this.setData({
      modalName:null,
      btnQuit:true,
      btnStart:true,
      msgs: this.addMsg("", "约饭正式开始，禁止退出群组")
    })
  },

  //退出
  Quit(e){
    //todo:出现弹窗，向后端发起退出请求
    this.showModal(e);
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target,
      modalMsg: e.currentTarget.dataset.msg,
      modalFun: e.currentTarget.dataset.fun
    })
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  addMsg(plain, blue) {
    var obj = {};
    obj.plainText = plain;
    obj.blueText = blue;
    let result = this.data.msgs;
    result.push(obj);
    return result;
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
    location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    var place="fan Info.place";
    if(location != null)
    {
      this.setData({
        [place]: location.name,
        msgs: this.addMsg("地点修改为：", location.name)
      })
    }
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