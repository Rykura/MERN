function sayHi(name){
    console.log('Hello ' + name);
}

var sayHello = function (name) {
    console.log('Hello ' + name);
};

const sayHello1 = (name) => {
    console.log(`Hello ${name}`);
};

const sayHello2 = (name) => "Hello "+name;

sayHello1("Brian")
console.log(sayHello2("Mark"))