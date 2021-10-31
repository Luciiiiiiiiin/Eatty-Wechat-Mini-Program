// pages/best/best.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    best:'A',
    second:'',
    third:'',
    food:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let newid= getApp().globalData.newid;
    let _this=this;
    wx.request({
      url: 'https://www.easyland-group.com/public_getbest.html', //仅为示例，并非真实的接口地址
      data: {
        newid:newid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data.data);
        let data=res.data.data;
        _this.setData({
          "best":data[0].fangan,
        });
        let arr=data[0].material.split(',');
        _this.setData({
          "food":arr
        });
      }
    })
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