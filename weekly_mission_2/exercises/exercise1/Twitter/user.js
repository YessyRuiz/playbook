const user = {
    user:"@Yessy01534",
    username:"YessyRuiz",
    bio:"perdida en el desierto",
    age:"28",
    email:"yessy@gmail.com",
    following: 42,
    follower: 1,

    getBio(){
        return `
        ${this.user}
        ${this.username}
        
        following: ${this.following} follower: ${this.follower}

        bio:
        ${this.bio}`
    },
}

console.log(user.getBio())