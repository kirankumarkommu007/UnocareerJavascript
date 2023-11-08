function myRound(num,r){
let p =1
for(let i =1;i<= r;i++){
    p = 10*p
}
    let newNum = ((num * p) | 0);//1366
    let lastnum = (newNum % p)|0;
    if(lastnum > 5){
        newNum ++
    }
    let roundedNum = newNum / p;
    return roundedNum;
} 

console.log(myRound(13.66646,1)); 