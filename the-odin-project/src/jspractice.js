

function Game(name, developer, hrs, played){
    this.name = name
    this.developer = developer
    this.hrs = hrs
    this.played = played
    this.gametitle = function(){
    console.log(`${this.name} is the game title and I have played ${this.hrs}`)
    }
}

const game1 = new Game("Zelda", "Nintendo", "1000", "yes")

game1.gametitle()

