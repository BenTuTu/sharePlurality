//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showModal: true,
    id: null,
    activeIndex: 0,
    yourPosition: '北京',
    jobs: [{}],
    randomPlu: ''

  },
  //改变滑动栏
  changTab: function () {
    
  },

  onLoad: function () {
    wx.chooseLocation({
      success: res => {
        this.setData({
          yourPosition: res.name
        })
      }
    })
    var randomPluId = Math.round(Math.random()*4);
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a09aaeb7b68855a07f77882/ajaxWriterData/getPluralityMsg#!method=get',
      method: 'GET',
      success: (res) => {
        this.setData({
          jobs: res.data.data,
          randomPlu: res.data.data[randomPluId].pluralityMsg
        });
        console.log(res.data.data);
      }
    })
  },

  changTab: function (e) {
    var type = e.target.dataset.index;
    this.setData({
      activeIndex: type
    });
    this.get_job_list(type==0?"":type);
  },

  swiperTab: function(e) {
    var type = e.detail.current;
    this.setData({
      activeIndex: type,
    })
    this.get_job_list(type==0?"":type);
  },
  //事件处理函数
  bindViewTap: function() {
   
  },

  // // 获取工作岗位列表
  // get_job_list: function(type) {
  //   wx.request({
  //     url: 'http://jxufer.cn:3000/api/position',
  //     method: 'GET',
  //     data: {
  //       type: type
  //     },
  //     success: (res) => {
  //      console.log(res);
  //       if(type==1){
  //           this.setData({
  //           nursery_list: res.data
  //         });
  //       }else if(type==2){
  //           this.setData({
  //           earlyTeach_list: res.data
  //         });
  //       }else{
  //           this.setData({
  //           jobs: res.data.data
  //         });
  //       }
  //     }
  //   })
  // },
 
  getPlurality: function () {
    this.setData({
      showModal: false
    });
    wx.navigateTo({
      url: "../pluralityJobDetail/pluralityJobDetail?id="+this.data.id
    });
  },

  onCancel: function () {
    this.setData({
      showModal: false
    });
  }

})
