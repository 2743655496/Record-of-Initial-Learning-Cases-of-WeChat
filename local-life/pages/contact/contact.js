// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList:[],
    isloding:false
  },

  getColors(){
    this.setData({
      isloding:true
    })
    // 需要展示loading效果
    wx.showLoading({
      title: '数据加载中...',
    })
    // 发起请求，获取随机颜色值的数组
    wx.request({
      url:'https://m1.apifoxmock.com/m1/9008627-8836649-default/api/color',
      method:'get',
      success: ({ data: res }) => {
        console.log('进入 success, res =', res)
        console.log('res.data 是数组吗?', Array.isArray(res))
        
        this.setData({
          colorList: [...this.data.colorList, ...res]
        }, () => {
          console.log('setData 后 colorList:', this.data.colorList)
        })
        console.log(this.data.colorList)
      },
      complete:() =>{
        wx.hideLoading() //2.隐藏loading效果
        this.setData({
          isloding:false
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getColors()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.isloding) return
    this.getColors()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})