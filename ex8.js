/**
* Created by Madalina Marian on 15/06/2020
* Create Facebook app
*/

var database = [
    {
        username: "Denis",
        password: "0000"
    },
    {
        username: "Cezar",
        password: "1234"
    },
    {
        username: "Sorin",
        password: "9876"
    }
]

var newsFeed = [
    {
        username: "Sorin",
        timeline: "It's a nice day!"
    },
    {
        username: "Denis",
        timeline: "Mammy, I love you!"
    },
    {
        username: "Maria",
        timeline: "Hello, how are you?"
    },

]

function isUserValid (username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username == username && database[i].password == password) {
            return true;
        } 
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, incorrect username or password");
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);