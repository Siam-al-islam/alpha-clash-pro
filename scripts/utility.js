function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
};

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
};

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// update score 
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// set scrore 
function setElementTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

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