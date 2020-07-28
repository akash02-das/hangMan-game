const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const finalMessage = document.getElementById('final-message');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'javascript', 'computer', 'engineering', 'science', 'technology', 'gadget', 'intelligence', 'communication'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => `<span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
                </span>
        `).join('')} 
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won! 😃';

        popup.style.display = 'flex';
    }
}

displayWord();