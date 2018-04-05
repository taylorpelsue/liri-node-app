require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require('twitter');



// var spotify = new Spotify(keys.spotify);

var client = new Twitter({
    consumer_key: keys.twitter.TWITTER_CONSUMER_KEY,
    consumer_secret: keys.twitter.TWITTER_CONSUMER_SECRET,
    access_token_key: keys.twitter.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: keys.twitter.TWITTER_ACCESS_TOKEN_SECRET
});

var inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "list",
    name: "whichCommand",
    message: "Please select an option",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
  },
]).then(function(user) {

    // If the user guesses the password...
    if (user.choices === "my-tweets") {
  
      console.log("==============================================");
      console.log("");
     console.log("shit's supposed to happen now or something");
      console.log("");
      console.log("==============================================");
    }else if(user.choices === "spotify-this-song"){
  
      console.log("==============================================");
      console.log("");
   
      console.log("");
      console.log("==============================================");
  
    }else if(user.choices === "movie-this"){
  
        console.log("==============================================");
        console.log("");
     
        console.log("");
        console.log("==============================================");
    
      }else if(user.choices === "do-what-it-says"){
  
        console.log("==============================================");
        console.log("");
     
        console.log("");
        console.log("==============================================");
    
      }
  });