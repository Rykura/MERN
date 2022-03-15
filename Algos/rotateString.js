//1
const rotateString = (str, val) =>{
    var newStr = str;
    for(var i = 0; i < val; i++){
        newStr += newStr[0];
        newStr = newStr.substr(1);
    }
    return newStr
}

//2
const isRotation = (str, str2) =>{
    if(str.length != str2.length){
        return false;
    }
    var newStr = str2;
    for(var i = 0; i <str.length; i++){
        if(newStr == str){
            return true;
        }
        newStr += newStr[0];
        newStr = newStr.substr(1);
        console.log(newStr);
    }
    return false;
}

// console.log(rotateString("hello", 3))
console.log(isRotation("good morning", "rninggood mo"))
