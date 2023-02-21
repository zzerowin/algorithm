const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a = input[0];
const b = input[1];
const v = input[2];

console.log(Math.ceil((v - b) / (a - b)));