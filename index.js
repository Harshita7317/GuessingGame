let computerGuess;
let userGuess= [];
let userGuessUpdate= document.getElementById("textOutput");
let userNumberUpdate =document.getElementById("inputBox");
let audio= new Audio("./game-start.mp3");
let sound= new Audio("./success.mp3");


const init = ()=> {
    computerGuess =Math.floor(Math.random()*100);
    console.log(computerGuess);
document.getElementById("newGameButton").style.display="none";
document.getElementById("gameArea").style.display="none";
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display= "none";
    document.getElementById("gameArea").style.display="block";
};
// reload the page
const newGameBegin = () => {
    window.location.reload();
     audio.play();
};
//start new game
const  startNewGame = () => {
    document.getElementById("newGameButton").style.display="inline";
        userNumberUpdate.setAttribute("disabled", true);
};
//main logic of our game
const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
      userGuess = [...userGuess, userNumber];
      document.getElementById("guesses").innerHTML = userGuess;
          //check the value low or high

          if(userGuess.length < maxGuess ) {
          if(userNumber > computerGuess){
            userGuessUpdate.innerHTML ="Your Guess is High 😱 ";
        userNumberUpdate.value = "";
    
        }
        else if(userNumber < compareGuess){
            userGuessUpdate.innerHTML ="Your Guess is Low 😒 ";
            userNumberUpdate.value = "";
           
        }
        else{
            userGuessUpdate.innerHTML ="Bravo ! It's Correct 🤩 ";
            userNumberUpdate.value = "";
            startNewGame();
            sound.play();

        }
    } else {
        if(userNumber > computerGuess){
            userGuessUpdate.innerHTML =`You loose ! Correct answer is ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();
        }
        else if(userNumber < compareGuess){
            userGuessUpdate.innerHTML =`You loose ! Correct answer is ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else{
            userGuessUpdate.innerHTML ="Bravo ! It's Correct 🤩 ";
            userNumberUpdate.value = "";
            startNewGame();
        }
        
    }
        document.getElementById("attempts").innerHTML = userGuess.length;

        };
    
const easyMode = () => {
    maxGuess = 10;
    startGame();
    audio.play();
};
const hardMode = () => {
    maxGuess = 5;
    startGame();
    audio.play();
};

