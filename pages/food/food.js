import AV from '../../libs/av';

Page({
  // 页面标题
  title: '',

  data: {
    loading: true,
  },

  onLoad(options) {
    const { name } = options;

    this.title = name;

    new AV.Query('Food')
      .equalTo('name', name)
      .include('image')
      .first()
      .then((food) => {
        this.setData({
          food,
          loading: false,
        });
      });
  },

  onReady() {
    const { title } = this;

    wx.setNavigationBarTitle({
      title,
    });
  },
});
