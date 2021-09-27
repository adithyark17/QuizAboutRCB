var readlineSync = require('readline-sync');
var score= 0;
const chalk= require("chalk");
const log= console.log;

var highscorer=[ 
  
  {name:"Adi",
   score:8},
   {
     name:"Siddarth",
     score:6
   }
]

//Welcome Message
var yn = readlineSync.question("Do you like " + chalk.bgBlue.bold("RCB?") + " " );

if(yn[0]=="y")
{
  log("That's Great!");
}
else{
  log("That's okay, you can take the quiz anyway :) \n")
}
var userName = readlineSync.question("What's your name? ");
log("--------------------")
log(chalk.bgCyan("Hello " + userName + " Welcome to the quiz!" + 
" Below are the Instructions of this quiz:\n") ) 
log("1) There are 2 levels to this quiz \n2) There are 4 MCQ question in each level \n3) You will be get 1 point for each correst answer and a negative point for every wrong answer \n4) You can enter level 2 if you have 3 or more points\n" )

var y= readlineSync.question(chalk.yellow("All the best! Press any key to start: "))
log("--------------------\n")

//Level - 1
// Defining a function "level1" with quiz logic
function level1(question, options, answer)
{
log(chalk.bgBlue(current.question))
var userAns= readlineSync.keyInSelect(options);
if(userAns+1===answer)
{
  log(chalk.green("Right!\n"))
  score++
}
else if(userAns+1===0)
{
  log(chalk.blue("Moving to next question...."));
}
else
{
  log(chalk.red("Wrong!\n"))
  score--
}
log("Your current score is: "+ chalk.cyan(score));
log(" ")
}

// Defining a data structure for the function "level1"
var questions= [
  {
    question: "When did RCB start playing?",
    options: ["2008", "2009", "2007"],
    answer: 1,
  },

  {
    question: "Who first captained RCB?",
    options: ["Kumble", "Dravid", "Kevin Peterson"],
    answer: 2,
  },    

   {
question:"Who is the leading wicket-taker for RCB?",
    options: ["Chahal", "Dale Steyn", "Vinay kumar"],
    answer: 1,
  },

   {
question:
    "Who currently captains RCB?",
    options: ["Kohli", "ABD", "Chahal"],
    answer: 1,
  },
]


//Loop to call the "level1" function
 for( var i=0; i<questions.length; i++)
 {
   var current= questions[i];
   level1(current.question, current.options, current.answer);
 } 
 log(chalk.bgRed("\n Your total score is : " + score ))

function showscore(){
  log("--------------------")
  log(chalk.bgRed("Your total score is : " + score ))
 console.log(chalk.bgRed("\nHighscores Leaderboard: "))
for(var j=0;j<highscorer.length;j++)
{
   var currenthighscorer=highscorer[j];
        console.log(chalk.yellowBright(currenthighscorer.name)+":"+chalk.cyan(currenthighscorer.score))
 }
}



//Level - 2
if(score==3 || score>3)
{
  log("--------------------")
  log(chalk.bgYellow("\nYou've reached level - 2\n"));

// Defining a function "level2" with quiz logic
function level2(question, options, answer)
{
  log(chalk.bgBlue(current2.question))
var userAns= readlineSync.keyInSelect(options);
if(userAns+1===answer)
{
   log(chalk.green("Right!\n"))
  score++
}
else if(userAns+1===0)
{
  log("Moving to next question....");
}
else
{
  log(chalk.red("Wrong!\n"))
  score--
}
log("Your current score is: "+ chalk.cyan(score));
log(" ")
}

// Defining a data structure for the function "level - 2"
var questions2= [
  {
    question: "Who owns RCB?",
    options: ["United Spirits", "Diaego", "Vijay Mallya"],
    answer: 1
  },

  {
    question: "In how many balls did Chris Gayle make his legendary 175* score against Pune Warriors?",
    options: ["66", "72", "69"],
    answer: 1
  },    

   {
question:"who was the first indian to score a century in rcb? ",
    options: ["Virat Kohli", "Manish Pandey", "KL Rahul"],
    answer: 2
  },

   {
question:
    " In which year did RCB reach the CLT20 finals",
    options: ["2010", "2009", "2011"],
    answer: 1
  },
]

//Loop to call the "level - 2" function
 for( var i=0; i<questions2.length; i++)
 {
   var current2= questions2[i];
   level2(current2.question, current2.options, current2.answer);
 } 
 function check()
 {
   if(score==8)
   {
     log("\nHurray! you are the highst scorer.")
   }
    else if(score==7 || score>5)
    {
      log("\nYay! you are the second highest scorer.")
    }
    else
    {
      log("\nYou are not an Office Fan, try again later")
    }
 }
 showscore()
 check()
}

else
{
  log("\nSorry you have less score you cannot go to level 2 but you can try again :) ")
  showscore()
}