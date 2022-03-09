class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }

}

class Effect extends Card{
    constructor(name,cost,text,stat,mag){
        super(name,cost)
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play(target){
        if( target instanceof Hero ) {
            if(this.stat == "res"){
                target.res += this.mag;
            }
            if(this.stat == "power"){
                target.power += this.mag;
            }
        } else {
            throw new Error( "Target must be a Hero!" );
        }
    }
}

class Hero extends Card{
    constructor(name,cost,power,res){
        super(name,cost)
        this.power = power;
        this.res = res;
    }
    attack(target){
        if( target instanceof Hero ) {
            target.res -= this.power;
        } else {
            throw new Error( "Target must be an opposing Hero!" );
        }
    }
    showstats(){
        console.log(this)
    }
}

const redBeltNinja = new Hero("Red Belt Ninja", 3,3,4);
const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3)
redBeltNinja.showstats()
hardAlgo.play(redBeltNinja);
redBeltNinja.showstats()
console.log("-------------------------------------------------------------")
const blackBeltNinja = new Hero("Black Belt Ninja", 4,5,4);
const unhandledPromiseRej = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "res", -2)
unhandledPromiseRej.play(redBeltNinja);
const PairProgram = new Effect("Pair Programing", 3, "Increase target's power by 2", "power", 2)
PairProgram.play(redBeltNinja);
redBeltNinja.showstats()
console.log("-------------------------------------------------------------")
redBeltNinja.showstats()
blackBeltNinja.showstats()
redBeltNinja.attack(blackBeltNinja)
redBeltNinja.showstats()
blackBeltNinja.showstats()