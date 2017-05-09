import AV from '../../libs/av';
import Category from '../../model/category';

Page({
  data: {

  },
  onReady() {
    new AV.Query(Category).find().then((category) => {
      this.setData({
        category,
      });
    });
  },
});
