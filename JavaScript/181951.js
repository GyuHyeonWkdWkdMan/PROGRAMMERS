//https://school.programmers.co.kr/learn/courses/30/lessons/181951
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
var a = 0;
var b = 0;

rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  a = input[0];
  b = input[1];
  console.log("a =", a);
  console.log("b =", b);
});
