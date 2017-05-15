var app = getApp()
Page({
  data: {
    items: []
  },
  onLoad: function() {
    let that = this;
    wx.request({
      url: 'http://json.bmbstack.com/cinemaList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: (res) => {
        console.log(res);
        that.setData({
          items: res.data
        })
      }
    })
  },
  onReady:function(){
    wx.setNavigationBarTitle({
      title:'影院'
    })

  }
})
