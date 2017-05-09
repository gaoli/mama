import AV from '../../libs/av';
import Food from '../../model/food';

Page({
  onLoad(option) {
    const { categoryId } = option;

    new AV.Query(Food)
      .equalTo('categoryId', parseInt(categoryId, 10))
      .find()
      .then((food) => {
        console.log(food);
      });
  },
});
