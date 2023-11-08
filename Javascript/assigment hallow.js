let matrix = [ 
    [1,2,3,4,5],
    [4,5,6,7,8],
    [7,8,9,1,2],
    [1,2,3,4,5],
    [6,7,8,9,1]
             ]

  let rSum = [0,0,0,0,0]   
  let cSum = [0,0,0,0,0]          
  for(let r=0;r<5;r++){
  for(let c=0;c<5;c++){
  rSum[r] = rSum[r] + matrix[r][c]
  cSum[c]=cSum[c]+matrix[r][c]
}
  }  
  
  for(let i=0;i<5;i++){
    if (i >0 && i < 4) {
        continue
    }
   
  console.log("Row "+(i+1)+" Sum--->"+rSum[i])
  console.log("col "+(i+1)+" Sum--->"+cSum[i])

  }
