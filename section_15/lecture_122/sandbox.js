// constructor function

function User(username, email) {
    this.username = username;
    this.email = email;
    this.login = function() {
        console.log(`${this.username} has logged in`);
    };
}

// class User {
//     constructor(username, email){
//         // set properties
//         this.username = username;
//         this.email = email;
//     }
// }


const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');

console.log(userOne, userTwo);
userOne.login();

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object