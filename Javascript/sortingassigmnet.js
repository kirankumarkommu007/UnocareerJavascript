let originalArray = [7, 3, 1, 4];
let sortedArray = originalArray.sort((a, b) => a - b);
for(let i =1, j=0; i<7 && j<i;i++, j++){
    if(sortedArray[j]==i){
continue
    }
    if(sortedArray[j]!=i){
        console.log(i)
    }
}
