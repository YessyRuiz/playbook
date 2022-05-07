const myPet = {
    name: "Woopa",
    sayHelloMyPet: function(yourPet){
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloMyPet("Tullio")