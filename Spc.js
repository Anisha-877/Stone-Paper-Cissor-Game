let userScore=0;
let compScore=0;
const  choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#my-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    //rock/paper/scissor
    const ranInd=Math.floor(Math.random()*3);
    return options[ranInd];

}
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game draw"
    msg.style.backgroundColor="blue";
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("User win");
        msg.innerText="You Win!"
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Comp win");
        msg.innerText="You Lose!"
        msg.style.backgroundColor="red";
    }
}
const playGame=(userchoice)=>{
    console.log("Choice was clicked by user",userchoice);
    //generater computer choice
    const comChoice=genCompChoice();
    console.log("Choice was clicked by comp",comChoice);
    if(userchoice===comChoice){
        //Draw-game
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            //scissor/paper
            userWin=comChoice==="paper"?false:true;
        }else if(userchoice==="paper"){
             //scissor/rock
             userWin=comChoice==="scissor"?false:true;
        }else{
            //iserchoice===scissor
            //compChoice->rock/paper
            userWin=comChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }

}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        
        const userchoice=choice.getAttribute("id");
        
        playGame(userchoice);
    })
})