const theaterCost = require('../theater_cost.js');

const plays = {
  hamlet: {
    name: 'Hamlet',
    type: 'tragedy',
  },
  'as-like': {
    name: 'As You Like It',
    type: 'comedy',
  },
  othello: {
    name: 'Othello',
    type: 'tragedy',
  },
};

const invoices = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  },
];

describe('theater cost test', () => {
  it('test', () => {
    expect(theaterCost(invoices[0], plays)).toBe(
      '청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $475.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,625.00\n적립 포인트: 47점\n'
    );
  });
});
