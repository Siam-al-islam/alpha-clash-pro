function handleKeyboardButtonPress(event) {
    const pressedKey = event.key;
    // stop game 
    if (pressedKey === 'Escape') {
        gameOver();
    }
    // get the expected press 
    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetText = currentAlphabet.innerText;
    const expectedAlpabet = currentAlphabetText.toLowerCase();
    // check 
    if (pressedKey === expectedAlpabet) {
        // update score 
        const currentScore = getTextElementValueById('current-score');
        // new score 
        const newScore = currentScore + 1;
        // set score 
        setElementTextById('current-score', newScore);
        // start new round 
        removeBackgroundColorById(expectedAlpabet);
        continueGame();
        hideElementById('danger-text')
    }
    else {
        showElementById('danger-text');
        const currentLife = getTextElementValueById('current-life');
        // new life
        const newLife = currentLife - 1;
        // set life 
        setElementTextById('current-life', newLife);

        if (newLife === 0) {
            gameOver();
        }
    }
}
// capture keyboard key press 
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getRandomAlphabet()
    // set random alphabet to the screen 
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet.toUpperCase();
    // set bg color 
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('score');
    // update final score
    const finalScore = getTextElementValueById('current-score');
    setElementTextById('final-score', finalScore);
}

function playAgain() {
    hideElementById('score');
    showElementById('play-ground');
    setElementTextById('current-life', 5);
    setElementTextById('current-score', 0);
    hideElementById('danger-text');
}