// pages/home/home.js
Page({
  data:{
    name:'codeWhy',
    age:18,
    students:[
      {id:110,name:'kobe',age:30},
      { id: 111, name: 'iverson', age: 30 },
      { id: 112, name: 'cater', age: 30 },
      { id: 113, name: 't-mac', age: 30 },
      { id: 114, name: 'lin', age: 30 }
    ],
    count:0
  },
  handleAddBtnClick(){
    //1.错误做法，界面是不会刷新的
    //this.data.count += 1
    //console.log(this.data.count)
    console.log('+按钮发生了点击');
    this.setData({
      count:this.data.count + 1
    });
  },
  handleSubBtnClick() {
    console.log('-按钮发生了点击');
    this.setData({
      count: this.data.count - 1
    });
  }
})

//编程范式
//1.命令式编程：原生操作DOM
//2.声明式编程：Vue/React/Angular