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
  })
});