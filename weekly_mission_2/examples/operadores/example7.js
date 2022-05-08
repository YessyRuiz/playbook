const countries7 =['Finland','Denmark','Sweden','Norway','Iceland']
const countriesContainigLand = countries7.filter((country) =>
    country.includes('land')
)

console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainigLand)

const countriesEndsByia = countries7.filter((country) => 
    country.endsWith('ia')
)

console.log("Ejemplo 7: paises que terminan con i")
console.log(countriesEndsByia)