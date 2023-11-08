let n= 5
let r =2
let k =(n-2)
let nfac 
let rfac
let kfac
for(let i =(n-1);i>=1;i--){
    let temp = n*i
    nfac=temp
    n = temp
}
for(let i =(r-1);i>=1;i--){
    let temp = r*i
    rfac=temp
    r = temp
}
for(let i =(k-1);i>=1;i--){
    let temp = k*i
    kfac=temp
    k = temp
}

console.log(nfac)
console.log(rfac)
console.log(kfac)

let result= nfac/(rfac*kfac)
console.log(result)