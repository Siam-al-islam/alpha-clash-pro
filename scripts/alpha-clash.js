function continueGame() {
    const alphabet = getRandomAlphabet()
    console.log(alphabet)
}

function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}