const input = require('fs').readFileSync('/dev/stdin').toString();

let dial = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
};

let minTime = 0;
for (let i = 0; i < input.length; i++) {
    for (let j in dial) {
        if (j.includes(input[i])) {
            minTime += dial[j];
        }
    }
}
console.log(minTime);