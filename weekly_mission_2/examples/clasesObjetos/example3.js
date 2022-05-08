class Stundent{
    constructor(name, age, subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}

const carloStudent = new Stundent ("Carlo",12,["NodeJS","Python"])

console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(carloStudent)
