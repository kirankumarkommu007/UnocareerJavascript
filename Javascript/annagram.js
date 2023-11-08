let myArray = [2,8,4,5];
let myArray2 = [2,8,5,4];
let frequency = 0;
for(let i =0; i<myArray.length ;i++){
    for(let j =0; j<myArray.length; j++){
        if(myArray[i] == myArray2[j]){
            frequency++
        }
    }
}
if(frequency == 4){
console.log(" true")
}else
console.log(" false")

