const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let nums = input[i].split(' ');

    console.log(Number(nums[0]) + Number(nums[1]));
}