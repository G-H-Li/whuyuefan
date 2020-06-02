// pages/createmeal/createmeal.js
var date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();

var endDate = new Date(date.setDate(date.getDate()+2));
const endYear = endDate.getFullYear();
const endMonth = endDate.getMonth() + 1;
const endDay = endDate.getDate();

const chooseLocation = requirePlugin('chooseLocation');
const referer = "约饭吗";
const key = "TN7BZ-H4QK3-FSE3K-YOVHQ-O2YGF-IDFG4";
var location = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    theme: "",
    date: [year, month, day].join('-'),
    endate: [endYear, endMonth, endDay].join('-'),
    time: [hour, minute].join(':'),
    place: "",
  },

  jumpToGroup(e){
    //todo:向后端传输数据
    if((this.data.theme != "" && this.data.theme != "必填")&& this.data.place != "")
    {
      wx.navigateTo({
        url: '/pages/group/group',
      })
    }
  },

  jumpToLocationChoose(e){
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&category=美食',
    })
  },

  InputConfirm(e){
    if(e.detail.value != "")
    {
      this.setData({
        theme: e.detail.value
      })
    }
    else
    {
      this.setData({
        theme: "必填"
      })
    }
  },

  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },

  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    if(location != null)
    {
      this.setData({
        place: location.name
      })
    }
  },
})