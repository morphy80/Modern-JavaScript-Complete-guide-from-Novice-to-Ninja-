// constructor function

function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.login = function() {
    console.log(`${this.username} has logged in`);
    return this;
};

User.prototype.logout = function() {
    console.log(`${this.username} has logged out`);
    return this;
};

// admin
function Admin(username, email, title) {
    User.call(this, username, email);
    this.title = title;
}

// methods
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user) {
    // delete the user
};

const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja');

console.log(userOne, userTwo, userThree);
userOne.login().logout();