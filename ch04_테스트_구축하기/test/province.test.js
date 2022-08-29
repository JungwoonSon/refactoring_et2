const Province = require("../province")
const sampleProvinceData = require("../sample");

describe('province', () => {
  it('shortfall', () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortFall).toBe(5);
  });

  it('profit', () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).toBe(230);
  })
});