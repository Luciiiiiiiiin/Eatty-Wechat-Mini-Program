// pages/sure/sure.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let thisid= getApp().globalData.newid;
    let _this=this;
     //根据ID获取后台目前在这个方案中的人员，并显示
     wx.request({
      url: 'https://www.easyland-group.com/public_getuser.html', //仅为示例，并非真实的接口地址
      data: {
        id:thisid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        //把人员赋值给参数username
        let data=res.data.data;
        _this.setData({
            'username':data
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

  },
  /**button */
  end:function(){
    wx.redirectTo({
      url: '/pages/best/best'
    })
  }
})