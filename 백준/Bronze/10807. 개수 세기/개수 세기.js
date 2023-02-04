const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, S, V] = input;

const count = S.split(' ').filter((e) => e == V).length;
console.log(count);