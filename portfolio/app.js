const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');



let p1Score = 0; // starts at 0 
let p2Score = 0; 
let winningScore = 3; 
let isGameOver = false; //  game not over 


p1Button.addEventListener('click', function(){ //When clicked on p1 button
    if (!isGameOver){ // if game is NOT over 
        p1Score += 1; // Adds 1 to the score
//AND
     if (p1Score === winningScore) { // if p1 Score is 5
        isGameOver = true; // Game IS Over 
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
        p1Button.disabled = true; 
        p2Button.disabled = true; 
    }

        p1Display.textContent = p1Score; //Displays the score 
    }

}); 

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1; 
        if (p2Score === winningScore){
            isGameOver = true; 
            p1Display.classList.add('loser');
        p2Display.classList.add('winner');
        }
        p2Display.textContent = p2Score; //Displays the score 
    }
}); 

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset); 

function reset(){
    isGameOver = false; //Game NOT Over - Variable used to keep track of whether the game is over or not. 
//Scores are set to 0 after reseting the game on click 
    p1Score = 0; 
    p2Score = 0; 

    p1Display.textContent = 0; 
    p2Display.textContent = 0; 

    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');

    p1Button.disabled = false; 
    p1Button.disabled = false; 
};

const winningScoreSelect = document.querySelector('#playto'); 
winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value); 
    reset();
}); 
