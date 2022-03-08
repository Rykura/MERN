// create a blueprint for what every athlete should have(attributes/properties - name, health, speed) and be able to do methods(run(), rest(), sayName())



class Olympian{
    //constructor means when the class is created the code to run will be inside the constructor
    constructor(nameInput, speedInput){
        this.name = nameInput;
        this.health = 100;
        this.speed = speedInput;
        this.energy = 100;
    }

    //our methods for the class
    competeInEvent(){
        this.energy -= 10;
    }
    displayStats(){
        console.log(`Name: ${this.name}`)
        console.log(`Health: ${this.health}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Energy: ${this.energy}`)
    }
    rest(){
        this.health += 20;
        this.energy += 40;
    }
}

//instances of a class (you can also call the objects)
// const olympian1 = new Olympian("Kobe", 89)
// const olympian2 = new Olympian("Bolt", 100)
// const olympian3 = new Olympian("Phelps", 77)
// olympian1.displayStats()
// olympian2.displayStats()
// olympian3.displayStats()
// olympian1.competeInEvent()
// olympian1.rest()
// olympian1.rest()
// olympian1.displayStats()

class Sprinter extends Olympian{
    //Give the sprinter its own constructor if the sprinter needs to have more attributesthan just the ones that it inherited from Olympian
    constructor(nameInput, speedInput, personal100MrecordInput){
        super(nameInput, speedInput) //super means run the parent constructor of the parent method
        this.personal100MeterRecord = personal100MrecordInput;
    }

    sprint(){
        console.log("3...2...1...GOOOOOO")
        this.energy -= 40;
        this.health -= 10;
    }
}
// let sprinter1 = new Sprinter("Bolt", 100,  9.5)
// console.log(sprinter1)
// sprinter1.sprint()
// console.log(sprinter1)

class Baller extends Olympian{
    constructor(nameInput, speedInput, vertInput){
        super(nameInput, speedInput) //super means run the parent constructor of the parent method
        this.vertical = vertInput;
    }
    dunk(){
        if(this.vertical < 20){
            console.log("Thats a layup Homie...")
            this.health -= 5;
        }
        else{
            console.log("SLAMMMMMMM")
            this.health -= 15;
        }
    }
}
let baller1 = new Baller("Lebron", 81, 42)
let baller2 = new Baller("Lebron", 81, 15)
baller2.dunk()
console.log(baller2)
