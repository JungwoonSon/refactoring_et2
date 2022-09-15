class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get price() {
    return this.basePrice * this.discountFactor();
  }

  discountFactor() {
    return this.basePrice > 1000 ? 0.95 : 0.98
  }

  get basePrice() {
    return this.#quantity * this.#item.price;
  }
}
