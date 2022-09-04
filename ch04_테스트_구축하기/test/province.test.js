const Province = require("../province")
const sampleProvinceData = require("../sample");

describe('province', () => {
  let asia;

  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it('shortfall', () => {
    expect(asia.shortFall).toBe(5);
  });

  it('profit', () => {
    expect(asia.profit).toBe(230);
  });

  it('change production', () => {
    asia.producers[0].production = 20;
    expect(asia.shortFall).toBe(-6);
    expect(asia.profit).toBe(292);
  });

  it('zero demand', () => {
    asia.demand = 0;
    expect(asia.shortFall).toBe(-25);
    expect(asia.profit).toBe(0)
  });

  it('negative demand', () => {
    asia.demand = -1;
    expect(asia.shortFall).toBe(-26);
    expect(asia.profit).toBe(-10);
  });

  it('empty string demand', () => {
    asia.demand = "";
    expect(asia.shortFall).toBe(NaN);
    expect(asia.profit).toBe(NaN);
  });
});

describe('no producers', () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20
    };
    noProducers = new Province(data);
  });

  it('shortfall', () => {
    expect(noProducers.shortFall).toBe(30);
  });

  it('profit', () => {
    expect(noProducers.profit).toBe(0);
  });

});

describe('string for producers', () => {
  it('', () => {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20
    };
    const prov = new Province(data);
    expect(prov.shortFall).toBe(0);
  });
});