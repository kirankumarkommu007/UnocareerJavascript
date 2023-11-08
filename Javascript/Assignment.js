let N = 1456;
let res;
let sum = 0;
for (let i =N; i > 0; i--) {
res = N % 10;
N = Math.floor(N / 10); 
sum += res;

}
console.log(sum);

