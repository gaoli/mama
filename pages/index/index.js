import AV from '../../libs/av';
import Category from '../../model/category';

Page({
  onLoad() {
    new AV.Query(Category).find().then((category) => {
      this.setData({
        category,
      });
    });
  },
});
