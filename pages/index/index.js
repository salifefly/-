Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav: 0,
    navList:[
      {
        "text": "首页",
        "id": 0
      },
      {
          "text": "动画",
          "id": 1
      },
      {
          "text": "番剧",
          "id": 2
      },
      {
          "text": "国创",
          "id": 3
      },
      {
          "text": "音乐",
          "id": 4
      },
      {
          "text": "舞蹈",
          "id": 5
      },
      {
          "text": "游戏",
          "id": 6
      },
      {
          "text": "科技",
          "id": 7
      },
      {
          "text": "数码",
          "id": 8
      }
    ],
    swiperList:[
      {
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/3075d0b4f0474ca061da6ec336e408d248a6a81e.jpg@206w_116h_1c_100q.webp"
      },
      {
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/efee5a46187af5afb3d9d26728bd7c5bfcde9054.jpg@206w_116h_1c_100q.webp"
      },
      {
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/c426831f98ef0319b2d6612dd78121b1fdc1581b.jpg@206w_116h_1c_100q.webp"
      },
      {
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/1e5a795d197501abff1481eab96f6e84c7f8e9be.jpg@206w_116h_1c_100q.webp"
      }
    ]
  },
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
//通过mock来获取数据
// var navLists = require("../../utils/home.js"),
  getNavList(){
    var that = this;
    wx.request({
      url:"https://mock-date.com/swiperList",
      success(res){
        if(res.code === 200){
          that.setData({
            swiperList : res.data.swiperList
          })
        }
      }
    });
  },
  
  getSwiperList(){
    var that = this;
    wx.request({
      url:"https://mock-date.com/swiperList",
      success(res){
        if(res.code === 200){
          that.setData({
            navList : res.data.navList
          })
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getNavList();
    // this.getSwiperList;
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