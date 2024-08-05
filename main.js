// part 27 // question 32
// checking username 
var current_users = ["Sham", "Ahmed", 'Zafar ali', "sooraj", 'kiran'];
var new_users = ["jairam", "Sham", "Ali", "ravi", "sooraj"];
new_users.forEach(function (new_username) {
    var lowercase = new_username.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowercase)) {
        console.log("The username ".concat(new_username, " is not available. please write a different username"));
    }
    else {
        console.log("The username ".concat(new_username, " is available"));
    }
});
