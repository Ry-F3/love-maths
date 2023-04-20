//wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`);
            }   
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed 
 */ 
function runGame(){

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 26);
    let num2 = Math.floor(Math.random() * 26);
}

runGame()

function checkAnswer(){

}

function calculateCorrectScore(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}