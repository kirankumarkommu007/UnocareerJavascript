let num = [4, 2, 6, 5, 1, 2];
let t;
let r;

// Sorting the array
for(let i = 0; i < num.length; i++){
    for(let j = i + 1; j < num.length; j++){
        if(num[i] > num[j]){
            t = num[i];
            num[i] = num[j];
            num[j] = t;
        }
    }
}

console.log("Sorted array: " + num);

// Finding the repeating number
for (let i = 0; i < num.length; i++) {
    let count = 0;
  
    for (let j = 0; j < num.length; j++) {
      if (num[i] === num[j]) {
        count++;
      }
    }

    if (count > 1) {
      r = num[i];
      break;
    }
}

console.log("Repeating number: " + r);

let k = 0;
for(let i = 0; i < num.length; i++){
    if(i > 0 && num[i] === num[i - 1]) continue;

    if(num[i] != k + 1){
        console.log("Missing number: " + (k + 1));
        break;
    }
    k++;
}
