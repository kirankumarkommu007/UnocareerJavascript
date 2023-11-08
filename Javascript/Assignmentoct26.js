let num = 6456464
let r;
let p=1
let d=0
let sum =0
while(num != 0){
r = num % 10;
num = num / 10
num = parseInt(num,10)
if(r == 4) 
continue

d = d + r * p
p = p * 10
sum += r
}

console.log("new number--->"+d)
console.log("add number--->"+sum)
