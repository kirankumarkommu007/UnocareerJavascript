function unoSplit(str,sChar,len){
    let ch
    let myWords = []
    let temp=""
    let index=0
    for(let i=0;i<len;i++){
        ch = str[i]
        if(ch == sChar){
            myWords[index] = temp
            temp = ""
            index++
        }// if
        else temp = temp + ch
        
        if(temp.charCodeAt[0] >  97  && temp.charCodeAt[0] < 122){
            temp.charAt[0] = temp.charCodeAt[0] -32
        }
        
    }// for
    return myWords
}// function

let data = "It is very difficult to count.this is Sample Data.welcome to Hyderabad.good Morning.Java is beautifully language."
let NewData = data.toLocaleLowerCase()
let totalWords = unoSplit(NewData,".",NewData.length)

console.log("total no of words--->"+totalWords.length)
console.log(totalWords);