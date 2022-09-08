 let player1score = 0
 let player2score = 0
 let player1turn = true
let wins = 0
const playermessage =    document.getElementById("message")
const player1scoreboard = document.getElementById("player1Scoreboard")
const player2scoreboard = document.getElementById("player2Scoreboard")
const player1dice = document.getElementById("player1Dice")
const player2dice = document.getElementById("player2Dice")
const rolbtn = document.getElementById("rollBtn") 
const resetbtn = document.getElementById("resetBtn") 
const winn = document.getElementById("numberofwins")
const wint = document.getElementById("numberof")



rolbtn.addEventListener("click", function(){
  let randomNumber = Math.floor(Math.random()*6 ) + 1;
if(player1turn){
    player1score += randomNumber
    player1dice.textContent = randomNumber
    playermessage.textContent = "Player 1 turn"
    player1scoreboard.textContent=player1score
    player1dice.classList.add("active")
    player2dice.classList.remove("active")
} else{
    player2score += randomNumber
    player2dice.textContent = randomNumber
    playermessage.textContent = "Player 2 turn"
    player2scoreboard.textContent=player2score
    player2dice.classList.add("active")
    player1dice.classList.remove("active")
}

if(player1score >= 20){
    playermessage.textContent ="Player 1 Won 🥳"
    wins = "1"
    winn.textContent += " " + wins 
    showresetbtn()
   
}else if(player2score >=20){
    playermessage.textContent ="Player 2 Won 🥳"
    wins = "2"
    winn.textContent +=" " + wins 
    showresetbtn()

    
}
  player1turn = !player1turn
})


function showresetbtn(){
    rolbtn.style.display="none"
    resetbtn.style.display="block"

}
resetbtn.addEventListener("click",function(){
    player1Turn = true
    player1score = 0
    player2score = 0
    player1dice.textContent = "-"
    player2dice.textContent = "-"
    playermessage.textContent = "Player 1 turn"
    player1scoreboard.textContent="0"
    player2scoreboard.textContent="0"
    rolbtn.style.display="block"
    resetbtn.style.display="none"

})