// Selecting all the necessary HTML elements
const againbtn = document.querySelector('#again-button'); // 'Again' button
const inputnum = document.querySelector('#input-number'); // Input field for guessing
const checkbtn = document.querySelector('#check-button'); // 'Check' button
const hint = document.querySelector('#hint'); // Hint message
const score = document.querySelector('#score'); // Score display
const randombox = document.querySelector('#randome-number-box'); // Display for the random number
const body = document.querySelector('#wrapper'); // Game body
const highscoredisp = document.querySelector('#hight-score'); // High score display

// Generating a random number between 1 and 20
let randomeNumber = Math.floor(Math.random() * 20) + 1;
let count = 20; // Initial count for the score
let highscore = 0 // Initial value of highscore

// Function to decrement the score count
function countscr() {
    count--;
    score.textContent = count;
}

// Event listener for the 'Check' button
checkbtn.addEventListener('click', function () {
    // Checking if the input number matches the random number
    const checkthenumber = (inputnum.value == randomeNumber);
    if (checkthenumber == true) {
        // Displaying the random number and appropriate hint
        randombox.textContent = randomeNumber;
        hint.textContent = 'perfect🥳'
        body.classList.add('change-bg'); // Changing background color
        highscoredisp.textContent = count; // Updating the high score
    }
    // Handling incorrect guesses
    if (randomeNumber != inputnum.value) {
        countscr(); // Decrementing the score count
    }
    // Providing hints for the guess
    if (randomeNumber > inputnum.value) {
        hint.textContent = 'too low!'
    }
    if (randomeNumber < inputnum.value) {
        hint.textContent = 'too high!'
    }
    // high score
    if(score > highscore){
        highscore = score;
        highscoredisp.textContent = highscore
    }
});

// Event listener for the 'Again' button
againbtn.addEventListener('click', function () {
    // Resetting the game
    body.classList.remove('change-bg'); // Removing background color change
    hint.textContent = 'Start!' // Resetting hint
    randombox.textContent = '?'; // Resetting random number display
    inputnum.textContent = ''; // Clearing input field
    score.textContent = 0; // Resetting score
    randomeNumber = Math.floor(Math.random() * 20) + 1; // Generating new random number
    // location.reload(); // Used to reload the web page (commented out)
    count = 20;
});
