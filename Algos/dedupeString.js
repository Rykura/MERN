// input: "sweet potato"
// output: "swet poa"

function dedupeString(str){
    var newStr = "";
    for(var i =  0; i<str.length; i++){
        if(newStr.includes(str[i])){
            console.log("already in new string")
        }
        else{
            newStr += (str[i])
        }
    }
    return newStr
}


console.log(dedupeString("sweet potato sandy")) //"swet poa"