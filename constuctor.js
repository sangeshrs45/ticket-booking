class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

login(){
    console.log("hi",this.name)
    console.log("you are logged in");
}
logout(){
    console.log("you are logged out")
}
}
let Userone = new User("sangesh",21)
Userone.login()
// let Usertwo = new User("mani",21)
// Usertwo.login()
// let Userthree = new User("arjun",21)
// Usertwo.login()
class parameter extends User{
    constructor(name,age){
        super (name,age)
        this.storage= 100
    }
    message(){
        console.log("you have 100gb free storage")
    }
}
let paidman =new parameter("sangesh",21)
paidman.login()
paidman.message()