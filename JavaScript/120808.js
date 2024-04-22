//https://school.programmers.co.kr/learn/courses/30/lessons/120808
var gcd = (num1, num2) => {
  var result = 1;
  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      result = i;
    }
  }
  return result;
};

var lcm = (num1, num2) => {
  return (num1 * num2) / gcd(num1, num2);
};

var simplify = (num1, num2) => {
  var i = gcd(num1, num2);
  var result = [num1, num2];
  if (i != 1) {
    result = [num1 / i, num2 / i];
  }
  return result;
};

function solution(numer1, denom1, numer2, denom2) {
  var denomresult = 0;
  var numerresult = 0;
  if (denom1 != denom2) {
    denomresult = lcm(denom1, denom2);
    numerresult = (numer1 * denomresult) / denom1 + (numer2 * denomresult) / denom2;
  } else {
    denomresult = denom1;
    numerresult = numer1 + numer2;
  }
  var answer = [];
  answer = simplify(numerresult, denomresult);
  return answer;
}

console.log(solution(9, 2, 1, 3));
