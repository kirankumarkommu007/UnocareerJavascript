let myArray = "swiss";
let temp = [];
let r =[];
let rCount

for (let i = 0; i < myArray.length; i++) {
    let count = 0;
    for (let j = 0; j < myArray.length; j++) {
        if (myArray[i] == myArray[j]) {
            count++;
            if (count > 1) {
                r = myArray[i]
                rCount = count
            }
        }
    }
    if (count == 1) {
        temp[temp.length] = myArray[i];
        
    }
}

console.log("non repeating numbers : "+temp);
console.log("First Repeting number :"+r+"   frequency :" + rCount);
