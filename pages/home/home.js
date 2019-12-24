// pages/home/home.js
//getApp()获取App()产生的示例对象
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age;

//注册一个页面
//页面有自己的生命周期函数
Page({
  //------ 2.初始化数据 ------
  data:{
    message:'哈哈哈',
    list:''
  },

  //------3.监听wxml中相关的事件 ------
  handleGetUserInfo(event){
    console.log(event);
    console.log(name);
    console.log(age);
    console.log(app);
  },
  handleViewClick(){
    console.log("哈哈哈 被点击");
  },

  //------4.监听其它事件 ------
  //监听页面的滚动
  onPageScroll(obj){
    //console.log(obj);
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面到底部');
  },
  //监听页面下拉刷新
  onPullDownRefresh() {
    console.log('页面下拉刷新');
  },
  onTabItemTap(){
    console.log('tabbar事件');
  },

  //------1.监听页面的生命周期函数 ------
  //页面被加载出来
  onLoad(){
    var myThis = this;
    console.log('onLoad');
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      //箭头函数的指针一层层向上找
      success(res){
        console.log(res);
        const data = res.header;
        myThis.setData({
          list:data
        });
      }
    })
  },
  //页面显示出来时
  onShow(){
    console.log('onShow');
  },
  //页面初次渲染完成时
  onReady() {
    console.log('onReady');
  },
  //页面隐藏
  onHide(){
    console.log('onHide');
  },
  
  onUnload(){
    console.log('onUnload');
  }
})