/*
given a string with repeated consecutive characters, return the amount of each character as such:


input: "aaabbbbcdd"

output: "a3b4c1d2"



*/


function encode(str){
    let newStr = "";
    var i = 0;
    let amount = 0;
    while(i < str.length){
        if(str[i+1] == str[i]){
            amount += 1;
        }
        else{
            amount ++
            newStr = newStr + str[i] + amount
            amount = 0
        }
        i++;
        }
        console.log(newStr)
    }


console.log(encode("aaabbbbcdd")) //"a3b4c1d2"