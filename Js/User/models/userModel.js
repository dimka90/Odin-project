const { use } = require("../routes/userroutes");

let id = 1;
const users = [];
class User{
    constructor(name, email, age){
        this.id = id++;
        this.name = name;
        this. email = email;
        this.age = age;
    }

static createuser(name, email, age){
   if ( users.find(user => user.email == email)){
    return { Error: "User already exit"}
    }

    const newUser = new User(name, email, age);

    console.log("User created Successfully");
  
    users.push(newUser)
    console.log("User array ", users)
    return newUser;
}

static getUserById(userId){

    return users.find( user => user.id == userId);
}

}


module.exports = { User,users}