const pullRequest ={
    title:"Agregado de carpetas",
    branchName:"master",
    dateCreated: new Date('Jul 12 2021').toDateString(),
    status:"verified",
    repositoryNameAssociated:"carlogilmar",

    getStatus(){
        return `the status is ${this.status}`
    },

    getTitleAndAutor(){
       return `This pullRequest ... was created by ...`
    }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAutor())