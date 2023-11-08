let a = 200
let b = 2
let c = 23
let max, min, secondLargest

if ((a > b)&& (a>c)) {
    max = a
    if(b>c){
        secondLargest =b
        min =c
    }
    else{
        secondLargest =c
        min =b
    }
}

if ((b > a)&& (b>c)) {
    max = b
    if(a>c){
        secondLargest =a
        min =c
    }
    else{
        secondLargest =c
        min =a
    }
}

if ((c > a)&& (c>b)) {
    max = c
    if(a>b){
        secondLargest =a
        min =b
    }
    else{
        secondLargest =b
        min =a
    }
}


console.log(" the max is :"+ max )
console.log(" the second largest is :"+ secondLargest)
console.log(" the min is :"+ min)