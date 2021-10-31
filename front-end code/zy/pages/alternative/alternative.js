// pages/alternative/alternative.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    fangan:'A',
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let thistime= getApp().globalData.newid;
    let _this=this;
    wx.request({
      url: 'https://www.easyland-group.com/public_getfangan.html', //仅为示例，并非真实的接口地址
      data: {
        newid:thistime,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        let datas=res.data.data;
        for(var i=0;i<datas.length;i++){
          let cds=datas[i].material;
          let fa=datas[i].fangan;
          let id=datas[i].id;
          let cdarray=cds.split(",");
          _this.setData({
            list:cdarray,
            id:id,
            fangan:fa,
          });
        }
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
  next:function(){
    
  },
  fanganbtn:function(event){
    let list=JSON.stringify(this.data.list);
    wx.redirectTo({
      url: '/pages/alternative2/alternative2?list='+list,
    })
  }
})