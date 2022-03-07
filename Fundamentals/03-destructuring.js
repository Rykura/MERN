const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

//old way
let bobsFirstName = person.firstName
let bobsLastName = person.lastName
let bobsEmail = person.email
// console.log(bobsFirstName)
// console.log(bobsLastName)
// console.log(bobsEmail)

//new es6 way of doing the above (refered to as destructuring)
let {firstName:vicsName, lastName:vicslastName, email:vicsEmail} = person;
// console.log(vicsName)
// console.log(vicslastName)
// console.log(vicsEmail)


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

let {[2]:lebron, [3]:james} = animals;
let[,dog,fish,cat,] = animals;
// console.log(dog)

const person1 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

//old way
let firstAddress = person1.addresses[0].address
console.log(firstAddress)

//new way
let {addresses:[,{address:secondAddress}]} = person1;
console.log(secondAddress);