// welfare/pages/cutImg/cutImg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    title: '图片裁剪',
    barBg: '#ffffff',
    color: '#000',

    image:""
  },

  //取消裁剪封面图
  cancelCrop: function (e) {

    wx.navigateBack({
      delta:1
    })
  },
  //完成裁剪封面图
  competeCrop: function (e) {

    var self = this;
    var coverImage = e.detail.tempImageSrc;

    wx.setStorageSync("coverImage", coverImage)

    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      image:options.image
    });
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