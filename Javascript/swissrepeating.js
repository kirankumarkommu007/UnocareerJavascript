let myArray = "siwss";
let nonRep = [];
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
        nonRep[nonRep.length] = myArray[i];
        break
    }

    
}

console.log("first non repeating number :"+nonRep);
console.log("First Repeting number :"+r+"   frequency :" + rCount);
