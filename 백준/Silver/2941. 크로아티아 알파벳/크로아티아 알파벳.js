const fs = require('fs');
const readFileSyncAddress = '/dev/stdin';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ');
input = input[0];

function sol(input) {
    const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
    let answer = 0;
    for (let i = 0; i < croatian.length; i++) {
        while (input !== input.replace(croatian[i], '')) {
            answer += 1;
            input = input.replace(croatian[i], ' ');
        }
    }
    return answer + input.split(' ').join('').length;
}

console.log(sol(input));
