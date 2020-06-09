/**
* Created by Madalina Marian on 09/06/2020
* Create Facebook app
*/

var database = [
    {
        username: "Madalina",
        password: "1234"
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
    }
]

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, incorrect username or password");
    }
}

signIn(userNamePrompt, passwordPrompt);