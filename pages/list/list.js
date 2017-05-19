import AV from '../../libs/av';

Page({
  // 页面标题
  title: '',

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

    // 设置导航标题
    this.title = categoryName;

    // 设置类别 ID
    this.categoryId = parseInt(categoryId, 10);

    // 设置窗口高度
    this.setData({
      windowHeight,
    });

    this.fetchListCount()
      .then((count) => {
        this.pageCount = Math.ceil(count / this.limit);
      })
      .then(() => {
        this.fetchList();
      });
  },

  onReady() {
    const { title } = this;

    wx.setNavigationBarTitle({
      title,
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

        const data = list.map((item) => {
          const name = item.get('name');
          const desc = item.get('desc');
          const baby = item.get('baby');
          const pregnant = item.get('pregnant');
          const puerpera = item.get('puerpera');

          const image = item.get('image');
          const thumbnailURL = image.thumbnailURL(120, 120);

          return {
            name,
            desc,
            baby,
            pregnant,
            puerpera,
            thumbnailURL,
          };
        });

        this.setData({
          list: [...this.data.list, ...data],
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
