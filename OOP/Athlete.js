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
        this.health += 10;
    }
}
//instances of a class (you can also call the objects)
const olympian1 = new Olympian("Kobe", 89)
const olympian2 = new Olympian("Bolt", 100)
const olympian3 = new Olympian("Phelps", 77)
olympian1.displayStats()
olympian2.displayStats()
olympian3.displayStats()
olympian1.competeInEvent()
olympian1.rest()
olympian1.rest()
olympian1.displayStats()
