import AV from '../../libs/av';
import Category from '../../model/category';

Page({
  data: {

  },
  onLoad() {
    new AV.Query(Category).find().then((category) => {
      this.setData({
        category,
      });
    });
  },
  openListPage(event) {
    const { categoryId } = event.currentTarget.dataset;

    wx.navigateTo({
      url: `../list/list?categoryId=${categoryId}`,
    });
  },
});
