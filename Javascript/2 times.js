let array =[1, 2, 4, 4, 4, 6, 6]
let x = 4
let count =0
let n = array.length/2 
console.log(n)


for(let i =0; i<array.length;i++){
    if(array[i] == x){
        count++
    }
    
}
if(count>n){
    console.log("True (x appears more than n/2 times in the given array)")
}else
console.log("False (x doesn't appear more than n/2 times in the given array)")

