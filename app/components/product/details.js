import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductDetailsComponent extends Component {
  @service('shopping-cart') cart;

  @action
  addToCart() {
    const { name, price, color, colors } = this.args;

    this.cart.addItem({
      name,
      color,
      image: colors.find((colorInfo) => colorInfo.color).image,
      price: price.current,
    });
  }
}
