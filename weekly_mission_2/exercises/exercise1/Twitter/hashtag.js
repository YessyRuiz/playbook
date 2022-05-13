const hashtag = {
    username:"@harsh_kashiwal",
    user:"Harsh Kashiwal",
    title:"Websites to practice your CSS skills",
    post:"Codepen .io",
    date:new Date('May 12 2022').toDateString(),
    hashtag:"#100DaysOfCode",

    getGerenalInfo(){
        return`
        ${this.username} ${this.user} ${this.date}

        ${this.title}

        ${this.post}
        ${this.hashtag}
        `
    },

    getHashtag(){
        return `
        ${this.hashtag}`
    },
}

console.log(hashtag.getHashtag())
console.log(hashtag.getGerenalInfo())