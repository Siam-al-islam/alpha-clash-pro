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
        removeBackgroundColorById(expectedAlpabet);
        continueGame();
    }
    else {
        console.log('Try next time')
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