function handleKeyboardButtonPress(event) {
    const pressedKey = event.key;
    console.log(pressedKey)
    // get the expected press 
    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetText = currentAlphabet.innerText;
    const expectedAlpabet = currentAlphabetText.toLowerCase();
    // check 
    if (pressedKey === expectedAlpabet) {
        console.log('you winnn !!!');
        // update score 
        const currentScore = getTextElementValueById('current-score');
        // new score 
        const newScore = currentScore + 1;
        // set score 
        setElementTextById('current-score', newScore);
        // start new round 
        removeBackgroundColorById(expectedAlpabet);
        continueGame();
    }
    else {
        console.log('Try next time');
        const currentLife = getTextElementValueById('current-life');
        // new life
        const newLife = currentLife - 1;
        // set life 
        setElementTextById('current-life', newLife);
    }
}
// capture keyboard key press 
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    const alphabet = getRandomAlphabet()
    // set random alphabet to the screen 
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet.toUpperCase();
    // set bg color 
    setBackgroundColorById(alphabet)
}

function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}