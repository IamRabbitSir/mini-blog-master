const config = require('../../utils/config.js')
const api = require('../../utils/api.js');
const regeneratorRuntime = require('../../utils/runtime.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    showLogin: false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    app.checkUserInfo(function (userInfo, isLogin) {
      if (!isLogin) {
        that.setData({
          showLogin: true
        })
      } else {
        that.setData({
          userInfo: userInfo
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },

  /**
   * 返回
   */
  navigateBack: function (e) {
    wx.switchTab({
      url: '../index/index'
    })
  },

  /**
   * 获取用户头像
   * @param {} e 
   */
  getUserInfo: function (e) {
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        showLogin: !this.data.showLogin,
        userInfo: e.detail.userInfo
      });
    } else {
      wx.switchTab({
        url: '../index/index'
      })
    }
  },
  /**
   * 展示打赏二维码
   * @param {} e 
   */
  showQrcode: async function (e) {
    wx.previewImage({
      urls: [config.moneyUrl],
      current: config.moneyUrl
    })
  },
  /**
   * 展示微信二维码
   * @param {*} e 
   */
  showWechatCode: async function (e) {
    wx.previewImage({
      urls: [config.wechatUrl],
      current: config.wechatUrl
    })
  },
  /**
   * 跳转我的收藏
   * @param {*} e 
   */
  bindCollect: async function (e) {
    wx.navigateTo({
      url: '../mine/collection/collection?type=1'
    })
  },
  /**
   * 跳转我的点赞 
   * @param {*} e 
   */
  bindZan: async function (e) {
    wx.navigateTo({
      url: '../mine/collection/collection?type=2'
    })
  },
})

