let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3)
    return options[randIdx];

}

    const drawGame = () =>{
        console.log("game was Draw")
        msg.innerText="Game was Draw, Play Again"
        
    }

const playGame = (userChoice) =>{
    console.log("user choice =" , userChoice);
    const computerChoice = genComputerChoice();
    console.log("computer choice =" , computerChoice);

    const showWinner =(userWin,userChoice,computerChoice) =>{
        if(userWin){
            userScore++
            userScorePara.innerText = userScore
            console.log("you win")
            msg.innerText=`You win Your ${userChoice} beats ${computerChoice}`
            msg.style.backgroundColor="green"
        }else {
            compScore++
            compScorePara.innerText = compScore
            console.log("you lose")
            msg.innerText=`You Lose ${computerChoice} beats ${userChoice}`
              msg.style.backgroundColor="red"
        }
    }

    if(userChoice === computerChoice){
        //Draw Game
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
    userWin = computerChoice === "paper" ? false : true;
}else if (userChoice === "paper"){
    userWin = computerChoice === "scissors" ? false : true;
}else{
  userWin = computerChoice === "rock" ? false : true;
}
showWinner(userWin,userChoice,computerChoice)
}
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

    playGame(userChoice);
    })
});