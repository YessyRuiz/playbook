const Trending = {
    title:"Chivas",
    theme:"Futbol",
    tweets:270,
    ranking:"1",
    
    getInfoGeneral(){
        return `
        ${this.ranking} - ${this.theme} - Tendencias
        ${this.title}
        ${this.tweets} mil tweets`
    },

    getTitle(){
        return `
        Tendencia : ${this.title}`
    }
}

console.log(Trending.getTitle())
console.log(Trending.getInfoGeneral())