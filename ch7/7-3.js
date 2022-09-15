export class Order {
  constructor(data) {
    this.priority = new Priority(data.priority);
  }

  isHighPriority() {
    return this.priority.higherThan('normal');
  }
}

class Priority {
  #value;
  constructor(value) {
    if(Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`); // 생성자 안에서 에러를 던지는 건 보안에 취약하다고 한다.
    }
  }

  get index() {
    return Priority.legalValues().findIndex(this.#value);
  }

  equals(other) {
    return this.index === other.index;
  }

  higherThan(other) {
    return this.index > other.index;
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
