import AV from '../../libs/av';
import Food from '../../model/food';

Page({
  onLoad(option) {
    const { categoryId, categoryName } = option;

    wx.setNavigationBarTitle({
      title: categoryName,
    });

    new AV.Query(Food)
      .equalTo('categoryId', parseInt(categoryId, 10))
      .find()
      .then((food) => {
        this.setData({
          food,
        });
      });
  },
});
