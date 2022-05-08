class Developer{
    constructor(name,mainLang,stack){
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }

    get getName(){
        return this.name
    }
}

console.log("Ejemplo 9: Herencia entre dos clases")
const carloDev = new Developer("Carlo","js",["elixir","groovy","lisp"])
console.log(carloDev)

class LaunchXStudent extends Developer{}

const carloLaunchxDev = new LaunchXStudent("Carlo","js",["elixir","groovy","lisp"])
console.log(carloLaunchxDev)
console.log(carloLaunchxDev.getName)
