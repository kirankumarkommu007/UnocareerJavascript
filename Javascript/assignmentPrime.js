function isPrime(num){
    let count  = 0;
    for(let i =1; i<=num;i++){
        if(num % i==0) {
            count++;
        }
    }
    if(count==2) return true;
    else return false;

}
let count =0
for(let k =1; k<=100; k++){
    if(isPrime(k)==true){
        console.log(k)
        count++
    }
    if(count == 7)break
}

