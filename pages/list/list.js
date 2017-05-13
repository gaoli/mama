import AV from '../../libs/av';

Page({
  // 类别 ID
  categoryId: undefined,

  // 当前页数
  page: 1,

  // 总的页数
  pageCount: 1,

  // 返回数量
  limit: 10,

  // 查询实例
  query: new AV.Query('Food'),

  data: {
    list: [],
    loading: true,
  },

  onLoad(option) {
    const { categoryId, categoryName } = option;
    const { windowHeight } = wx.getSystemInfoSync();

    // 设置类别 ID
    this.categoryId = parseInt(categoryId, 10);

    // 设置窗口高度
    this.setData({
      windowHeight,
    });

    // 设置导航标题
    wx.setNavigationBarTitle({
      title: categoryName,
    });

    this.fetchListCount()
      .then((count) => {
        this.pageCount = Math.ceil(count / this.limit);
      })
      .then(() => {
        this.fetchList();
      });
  },

  /**
   * 获取列表数据
   */
  fetchList() {
    const { categoryId, page, limit, query } = this;

    query.equalTo('categoryId', categoryId);
    query.include('image');
    query.select(['name', 'desc', 'image', 'pregnant', 'puerpera', 'baby']);
    query.limit(limit);
    query.skip(limit * (page - 1));

    query.find()
      .then((list) => {
        this.page = this.page + 1;

        this.setData({
          list: [...this.data.list, ...list],
          loading: false,
        });
      });
  },

  /**
   * 获取总的数量
   * @return {Promise}
   */
  fetchListCount() {
    const { categoryId, query } = this;

    query.equalTo('categoryId', categoryId);

    return query.count();
  },

  handleScrollToLower() {
    const { page, pageCount } = this;
    const { loading } = this.data;

    if (!loading && page <= pageCount) {
      this.setData({
        loading: true,
      });

      this.fetchList();
    }
  },
});
