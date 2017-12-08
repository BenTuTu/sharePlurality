// pages/getPlurality/getPlurality.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pluralityMsg: '',
    money: '',
    id: null,
    showModal: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var selId = options.id;
    wx.request({
      url: 'http://www.easy-mock.com/mock/5a09aaeb7b68855a07f77882/ajaxWriterData/getPluralityMsg',
      method: 'GET',
      success: (res) => {
         this.setData({
          id: selId,
          pluralityMsg: res.data.data[selId].pluralityMsg,
          money: res.data.data[selId].money,
          showModal: true
         });
        // console.log(selId);
      }
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
  
  },

  completePlurality: function () {
    wx.showModal({
      title: '确认完成',
      content: '已经完成工作',
      success: res => {
        if (res.confirm) {
          this.setData({
            id: null,
            pluralityMsg: '',
            money: '',
            showModal: false
          });
       }
      }
    });
  },

  pluralityDetail: function () {
    wx.navigateTo({
      url: "../pluralityJobDetail/pluralityJobDetail?id="+this.data.id
    });
  }
})