// pages/alternative2/alternative2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    caidan:[],
    food2:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = JSON.parse(options.list);
    let _this=this;
    console.log(list);
    this.setData({
      caidan:list
    });
    let arr=new Array();
    for(let i=0;i<list.length;i++){
      let cd1;
      /*if(i==0){
        cd1=list.caidan1;
      }else if(i==1){
        cd1=list.caidan2;
      }else if(i==2){
        cd1=list.caidan3;
      }else if(i==3){
        cd1=list.caidan4;
      }*/
      cd1=list[i];
      wx.request({
        url: 'https://www.easyland-group.com/public_details.html', //仅为示例，并非真实的接口地址
        data: {
          foodname:cd1,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          let data=res.data.data[0];
          arr.push(data);
          _this.setData({
            "food2":arr
          });
        }
      })
    }
    console.log(arr);
    this.setData({
      "food2":arr
    });
    console.log(this.data);
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
  yes:function(){
    let fanganid=this.data.caidan.id;
    //获取方案id，并投票
    wx.request({
      url: 'https://www.easyland-group.com/public_toupiao.html', //仅为示例，并非真实的接口地址
      data: {
        fanganid:fanganid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        wx.redirectTo({
          url: '/pages/sure/sure'
        })
      }
    })
    
  },
  no:function(){
    wx.redirectTo({
      url: '/pages/alternative/alternative'
    })
  }
})