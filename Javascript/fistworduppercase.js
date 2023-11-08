function convertToCapital(str,len){
    let ch =""
    let newLineFound= false
    let res = ""
    for(let i=0, j=1;i<len && j<len;i++,j++){
        ch = str[i]
        if( newLineFound  == true){
            ch = ch.toUpperCase()
            newLineFound = false;
        }
        ch = str[j]
        if( newLineFound  == true){
            ch = ch.toLowerCase()
            newLineFound = false;
        }// if
        res = res + ch
        if(ch == "."){
            newLineFound = true
        }// if
        
    }// for
    return res

}

let data = 
"It is very difficult to count."+
"this is Sample Data."+
"welcome to Hyderabad."+
"good Morning."+
"Java is bEautifully language."

let conStr = convertToCapital(data,data.length)

console.log("Result Str------>"+conStr)