const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
let n, m;

rl.on("line", (line) => {
  inputs.push(line);
}).on("close", () => {
  [n, m] = inputs.shift().split(" ").map(Number);
  let balls = Array.from({ length: n }, (_, i) => i + 1);
  
  for (let i = 0; i < m; i++) {
    const [a, b] = inputs[i].split(" ").map(Number);
    [balls[a - 1], balls[b - 1]] = [balls[b - 1], balls[a - 1]];
  }
  
  console.log(balls.join(" "));
});