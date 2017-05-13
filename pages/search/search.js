import AV from '../../libs/av';
import Food from '../../model/food';

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
   * 处理值输入
   */
  handleTyping(e) {
    const { value } = e.detail;

    this.setData({
      value,
    });

    if (value !== '') {
      new AV.Query(Food)
        .contains('name', value)
        .find()
        .then((foods) => {
          this.setData({
            foods,
          });
        });
    } else {
      this.setData({
        foods: [],
      });
    }
  },
});
