

export const issue = {
    title:"03 Live 3 Semana 1 [Viernes 8 de Abril]",
    repositoryNameAssociated:"b",
    status:"finalizado",
    numberOfComments:"156",
    labels:"12",
    author:"carlogilmar",
    dateCreated: new Date('Jul 12 2021').toDateString(),
    lastUpdated: new Date().toDateString(),

    getTitleAndAuthor(){
        return `This issue ${this.title} was created by ${this.author}`
    },

    getGeneralInfo(){
        return ` 
        title: ${this.title}
        repositoryNameAssociated: ${this.repositoryNameAssociated}
        status: ${this.status}
        labels: ${this.labels}
        author: ${this.author}
        dateCreated: ${this.dateCreated}
        last Updated: ${this.lastUpdated}`
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())