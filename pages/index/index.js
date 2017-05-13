Page({
  data: {
    categories: [{
      id: 1,
      name: '水果',
    }, {
      id: 2,
      name: '肉类',
    }, {
      id: 3,
      name: '水产海鲜',
    }, {
      id: 4,
      name: '饮品',
    }, {
      id: 5,
      name: '零食小吃',
    }, {
      id: 6,
      name: '干果',
    }, {
      id: 7,
      name: '蔬菜',
    }, {
      id: 8,
      name: '五谷杂粮',
    }, {
      id: 9,
      name: '调味品',
    }, {
      id: 10,
      name: '乳制品',
    }, {
      id: 11,
      name: '粮食加工',
    }, {
      id: 12,
      name: '药材',
    }],
  },
  openSearchPage() {
    wx.navigateTo({
      url: '../search/search',
    });
  },
});
