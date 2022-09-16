const organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' });

class Organization {
  #data;
  #name;
  #country;

  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get #name() {
    return this.#name;
  }

  get #country() {
    return this.#country;
  }

  get rawData() {
    return { ...this.#data }; // 얉은복사, cloneDeep 을 사용하면 깊은 복사 가능
  }
}

organization.name = '애크미 구스베리'; //
console.log(organization.name);
console.log(organization.country);
