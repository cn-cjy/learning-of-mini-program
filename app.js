//注册小程序示例
App({

  //也可以传个参数
  onLaunch: function (options) {
    console.log('onLaunch');
    console.log(options);

    //网络请求

    //获取用户数据

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('onShow');
    console.log(options);
    //1.判断小程序的进入场景
    switch(options.scene){
      case 1001:;
    }

    //2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({
      success:function(res){
        console.log(res);
      }
    });
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },

  globalData:{
    name:'globalName',
    age:'22'
  }
})
