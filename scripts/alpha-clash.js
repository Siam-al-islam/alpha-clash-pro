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