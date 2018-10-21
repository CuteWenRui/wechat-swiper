//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    picList:[
      {
        imageUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=141991798,3480003694&fm=26&gp=0.jpg',
        name:'喵'
      },
      {
        imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540119781567&di=82cf17763205779898f42f2f4c6ee076&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172320_V2P3N.thumb.700_0.jpeg',
        name: '喵喵'
      },
      {
        imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540119824890&di=12452661310cef43acfd239b69115cde&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dca4b5d3524dda3cc1fe9b06369805374%2F7dd98d1001e93901a042499471ec54e737d196dc.jpg',
        name: '喵喵喵'
      }
    ],
    currentIndex:0
  },
  onLoad : function(options){
    this.setData({
      currentIndex: this.data.picList.length-1
    })

  }
})
