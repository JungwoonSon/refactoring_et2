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
});