let userScore=0;
let compScore=0;

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score"); 
 
const choices =document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

const draw=()=>{
    msg.innerText="Game Draw , Play Again";
    msg.style.backgroundColor="#0C2D57";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win!, Yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost ,  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}

const playGame=(userChoice)=>{
    const compChoice= genCompChoice();
    if(userChoice==compChoice){
        draw();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // paper , scissors
            userWin = compChoice =="paper" ? false : true; 
        }
        else if(userChoice==="paper"){
          // rock , scissors
          userWin = compChoice==="rock" ? true: false;
        }
        else{
            // rock , paper
            userWin= compChoice==="rock" ? false: true;
        }
        showWinner(userWin ,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})

