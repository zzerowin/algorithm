const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
    let cnt = 0;
    let sum = 0;

    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === "O") {
            cnt++;
        } else {
            cnt = 0;
        }

        sum += cnt;
    }

    console.log(sum);
}