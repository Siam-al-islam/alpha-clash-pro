function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
};

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
};

function getRandomAlphabet() {
    // alphabet array create 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // get a random index 
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}