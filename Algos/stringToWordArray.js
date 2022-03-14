// create a function that accepts a string as an input and outputs an array with each word from the string

//input: "hello hey how you doing?"
//output: ["hello","hey","how","you","doing?"]

const stringBreak = (str) =>{
    const myArray = str.split(" ");
    return myArray;
}

console.log(stringBreak("hello my name is Program!"))