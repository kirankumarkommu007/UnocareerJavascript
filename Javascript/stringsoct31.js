let data = "it is very dificult to count. this is sample data. Welcome to Hyderabad. good morning. java is beautiful."
let wIndex = data.indexOf("w")
let cutStr = data.substring(wIndex)
let subStr = data.split(" ")
let isCount = 0
let itCount = 0
for(let i =0;i<subStr.length;i++){
    if(subStr[i]==="is"){
        isCount++
    }
    if(subStr[i]==="it"){
        itCount++
    }
}
if(isCount>itCount){console.log("the max word is ----->is : "+ isCount +" && "+ " the min word is ----->it :"+ itCount)}
else{console.log("the max word is ----->it"+ itCount+"&&"+"the min word is ----->it : "+ itCount)}