var express = require('express');
var app = express();
var fs = require("fs");

// write Json questions as input.json
var questions =[
  "What is Your Name?",
    "What is your favorite Moto",
    "what is you perferred partner"

];

// write the answers as output.json

var answers = [];
 
// set up the programm to ask the questions
function ask(i){
    process.stdout.write('\n\n\n ${questions[i]}');
    process.stdout.write(" > ");
       
}

