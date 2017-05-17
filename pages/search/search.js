import AV from '../../libs/av';

Page({
  data: {
    value: '',
    focus: true,
    foods: [],
  },

  /**
   * 显示输入框
   */
  showInput() {
    this.setData({
      focus: true,
    });
  },

  /**
   * 隐藏输入框
   */
  hideInput() {
    wx.navigateBack();
  },

  /**
   * 清空输入框
   */
  clearInput() {
    this.setData({
      value: '',
      foods: [],
    });
  },

  /**
   * 点击完成按钮
   */
  handleConfirm(e) {
    const { value } = e.detail;

    wx.showNavigationBarLoading();

    if (value !== '') {
      new AV.Query('Food')
        .contains('name', value)
        .find()
        .then((foods) => {
          this.setData({
            value,
            foods,
          });

          wx.hideNavigationBarLoading();
        });
    } else {
      this.setData({
        value,
        foods: [],
      });

      wx.hideNavigationBarLoading();
    }
  },
});
