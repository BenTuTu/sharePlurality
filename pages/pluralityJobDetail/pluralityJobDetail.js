// pages/pluralityJobDetail/pluralityJobDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {name: 'mor', value: '上午'},
      {name: 'aft', value: '下午'}
    ],
    id: null,
    winHeight: null,
    getPlurality: true,  
    pluralityMsg: '',
    time: '',
    timeInterval: '',
    jobSte: '',
    jobContent: '' ,
    selTime: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options.id = 1;
    var selId = options.id;
    // console.log(options.id);
    //利用前台传递的id获取整条数据
    wx.request({
      url: 'http://www.easy-mock.com/mock/5a09aaeb7b68855a07f77882/ajaxWriterData/getPluralityMsg',
      method: 'GET',
      success: (res) => {
         this.setData({
          id: selId,
          pluralityMsg: res.data.data[selId].pluralityMsg,
          time: res.data.data[selId].time,
          timeInterval: res.data.data[selId].timeInterval,
          jobSte: res.data.data[selId].jobSte,
          jobContent: res.data.data[selId].jobContent
         });
        // console.log(selId);
      }
    });

    wx.getSystemInfo({
      success: systemData => {
        this.setData({
          winHeight: systemData.windowHeight - 50
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
    wx.getSystemInfo({
      success: systemData => {
        this.setData({
          winHeight: systemData.windowHeight - 50
        });

      }
    })
    
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
  /**
   * checkbox发生change事件，携带value值
   */
  checkboxChange: function(e) {
    this.setData({
      selTime: e.detail.value.length
    });
    console.log('checkbox发生change事件，携带value值为：', e.detail.value.length);
  },

  /**
   * 注册点击事件
   */
  goRegistration: function (event) {
    this.setData({
      getPlurality: false
    });
    // 对选择的时段做判断
    var selTime = this.data.selTime;
    if (2 == selTime) {
      wx.navigateTo({
        url: "../getPlurality/getPlurality?id="+this.data.id
      });
    }
    console.log(this.data.getPlurality);
  }

})