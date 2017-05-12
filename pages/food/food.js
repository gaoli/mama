import AV from '../../libs/av';
import Food from '../../model/food';

Page({
  onLoad(option) {
    const { name } = option;

    wx.setNavigationBarTitle({
      title: name,
    });

    new AV.Query(Food)
      .equalTo('name', name)
      .include('image')
      .first()
      .then((food) => {
        this.setData({
          food,
        });
      });
  },
});
