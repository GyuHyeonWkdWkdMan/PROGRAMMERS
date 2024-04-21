//https://school.programmers.co.kr/learn/courses/30/lessons/181934?language=javascript
function solution(ineq, eq, n, m) {
  var answer = 0;
  if (ineq === "<" && n < m) {
    answer = 1;
  } else if (ineq === ">" && n > m) {
    answer = 1;
  } else if (eq === "=" && n == m) {
    answer = 1;
  }
  return answer;
}

solution("<", "!", 1, 3);
