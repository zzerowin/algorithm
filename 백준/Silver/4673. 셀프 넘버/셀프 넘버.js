function sol(n) {
  let num = n;
  let result = 0;

  for (let i = 0; i < String(n).length; i++) {
    result += num % 10;
    num = Math.floor(num / 10);
  }

  return n + result;
}

const range = 10000;
let selfNums = Array(range + 1).fill(true);

for (let i = 0; i <= range; i++) {
  selfNums[sol(i)] = false;
}

for (let i = 0; i < range; i++) {
  if (selfNums[i]) {
    console.log(i);
  }
}