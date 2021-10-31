// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    suan:3,
    tian:3,
    ku:3,
    la:3,
    xian:3,
    tnb:0,
    gxy:0,
    xzb:0,
    tf:0,
    zf:0,
    zfg:0,
    hy:0,
    jb:""
  },
  checkboxChange:function(e){
    let arr=e.detail.value;
    let temp="";
    if(arr.indexOf("tnb")>-1){
      temp="1";
      this.setData({
        tnb:1
      });
    }else{
      temp="0";
    }
    if(arr.indexOf("gxy")>-1){
      temp=temp+"1";
      this.setData({
        gxy:1
      });
    }else{
      temp=temp+"0";
    }
    if(arr.indexOf("xzb")>-1){
      temp=temp+"1";
      this.setData({
        xzb:1
      });
    }else{
      temp=temp+"0";
    }
    if(arr.indexOf("tf")>-1){
      temp=temp+"1";
      this.setData({
        tf:1
      });
    }else{
      temp=temp+"0";
    }
    if(arr.indexOf("zf")>-1){
      temp=temp+"1";
      this.setData({
        zf:1
      });
    }else{
      temp=temp+"0";
    }
    if(arr.indexOf("zfg")>-1){
      temp=temp+"1";
      this.setData({
        zfg:1
      });
    }else{
      temp=temp+"0";
    }
    if(arr.indexOf("hy")>-1){
      temp=temp+"1";
      this.setData({
        hy:1
      });
    }else{
      temp=temp+"0";
    }
    this.setData({
      jb:temp
    });
  },
  radioChange: function(e) {
    this.setData({
      suan:e.detail.value
    });
    this.data.suan=e.detail.value;
  },
  radioChange2: function(e) {
    this.setData({
      tian:e.detail.value
    });
  },
  radioChange3: function(e) {
    this.setData({
      ku:e.detail.value
    });
  },
  radioChange4: function(e) {
    this.setData({
      la:e.detail.value
    });
  },
  radioChange5: function(e) {
    this.setData({
      xian:e.detail.value
    });
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

  next:function(){
    let thistime= getApp().globalData.newid;
    let nickname= getApp().globalData.userInfo.nickName;
    console.log(this.data);
    wx.request({
      url: 'https://www.easyland-group.com/public_fangan.html', //仅为示例，并非真实的接口地址
      data: {
        newid:thistime,
        usernam:nickname,
        suan:this.data.suan,
        tian:this.data.tian,
        ku:this.data.ku,
        la:this.data.la,
        xian:this.data.xian,
        /*tnb:this.data.tnb,
        gxy:this.data.gxy,
        xzb:this.data.xzb,
        tf:this.data.tf,
        zf:this.data.zf,
        zfg:this.data.zfg,
        hy:this.data.hy,
        jb:this.data.jb*/
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        wx.redirectTo({
          url: '/pages/alternative/alternative'
        })
      }
    })
    
  }
})