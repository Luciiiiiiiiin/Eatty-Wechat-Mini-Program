// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
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

  },
  //获取id值
  idinput:function(e){
    this.data.id=e.detail.value;
  },
  /**button */
  next:function(){
    //获取ID，加入某个id
    let thisid=this.data.id;
    let nickname= getApp().globalData.userInfo.nickName;
    getApp().globalData.newid=this.data.id;
    wx.request({
      url: 'https://www.easyland-group.com/public_join.html', //仅为示例，并非真实的接口地址
      data: {
        id:thisid,
        nickname:nickname,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        wx.redirectTo({
          url: '/pages/details/details'
        })
      }
    })
    
  }
})