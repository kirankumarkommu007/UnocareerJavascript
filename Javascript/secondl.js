let a =100
let b =233
let c = 150
let max, min, secondLargest

if((a>b)&& (a>c)){
    max= a
    if(b>c){
        secondLargest =b
        min = c
    }
    else{
        secondLargest = c
        min = b
    }
}
if((a>b)&& (a<c)){
    secondLargest= a
    if(b>c){
       max= b
       min =c
    }
    else{
        max= c
        min =b
    }
}
if((a<b)&& (a<b)){
    min = a
    if(b>c){
        max= b
        secondLargest =c
    }
     else{
        max= c
        secondLargest =b
    }

}

console.log(" the max is :"+max )
console.log(" the second largest is :"+secondLargest)
console.log(" the min is :"+min)