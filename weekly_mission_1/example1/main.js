
let myCar = new Object();
myCar.make = 'Ford';
myCar.mode1 = 'Mustang';
myCar.year = 1969;

console.log(myCar);

const myModule = (() =>{
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1,2,3,4]
    const baz = "Soy un valor expuesto"

    const exported = {
        publicFoo : "Valor publico, pueden verme desde donde llamen",
        publicBar : "Otro valor publico",
        publicBaz: baz
    }
    return exported

})()

console.log(myModule);


