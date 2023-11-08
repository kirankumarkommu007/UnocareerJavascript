let num = [1,1,5,3,6,2]
let t
for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i] > num[j]){
            t= num[i]
            num[i] = num[j]
            num[j] = t
        }
    }
}
console.log(num)
let k = 0;
for(let i = 0; i < num.length; i++){
    if(i > 0 && num[i] === num[i - 1]) continue;
    if(num[i] != k + 1){
        console.log("Missing number: " + (k + 1));
        break;
    }
    k++;
}
