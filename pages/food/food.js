import AV from '../../libs/av';

Page({
  name: '',

  data: {
    loading: true,
  },

  onLoad(options) {
    const { name } = options;

    this.name = name;

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
    const { name: title } = this;

    wx.setNavigationBarTitle({
      title,
    });
  },

  onShareAppMessage() {
    const { name } = this;

    return {
      title: `孕妈能不能吃${name}？`,
      path: `pages/food/food?name=${name}`,
      success: () => {
        wx.showToast({
          title: '转发成功',
        });
      },
    };
  },
});
