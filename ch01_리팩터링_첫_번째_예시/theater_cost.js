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

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimuumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = amountFor(perf, play);

    // 포인트를 적립힌다.
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 희극 곽객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역을 출력한다.
    result += ` ${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;

  function amountFor(perf, play) {
    let thisAmount = 0;
    switch (play.type) {
      case 'tragedy': // 비국
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case 'comedy': // 희극
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        break;
      default:
        throw new Error(`알 수 없는 장르: ${play.type}`);
    }

    return thisAmount;
  }
}
