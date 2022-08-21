const { statement, htmlStatement } = require('../statement.js');

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
  it('statement', () => {
    expect(statement(invoices[0], plays)).toBe(
      '청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $475.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,625.00\n적립 포인트: 47점\n'
    );
  });

  it('htmlStatement', () => {
    expect(htmlStatement(invoices[0], plays)).toBe(
      '<h1>청구 내역 (고객명: BigCo)</h1>\n<table>\n<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>  <tr><td>Hamlet</td><td>(55석)</td><td>$650.00</td></tr>\n  <tr><td>As You Like It</td><td>(35석)</td><td>$475.00</td></tr>\n  <tr><td>Othello</td><td>(40석)</td><td>$500.00</td></tr>\n</table>\n<p>총액: <em>$1,625.00</em></p>\n<p>적립 포인트: <em>47</em>점</p>\n'
    );
  });
});
