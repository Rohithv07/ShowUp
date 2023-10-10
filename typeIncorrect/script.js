const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

let words = [];
let wordIndex = 0;
// start time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value')

document.getElementById('start').addEventListener('click', () => {
    // get a quote from the array
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    // we got a quote and we put it into another array
    words = quote.split(' ');
    wordIndex = 0; // for tracking purpose
    // creating an array of span elements which contain each word inside span
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // set as innerHtml display
    quoteElement.innerHTML = spanWords.join('');
    // highlight the words
    quoteElement.childNodes[0].className = 'highlight';
    // clear any previous messages if any
    messageElement.innerText = '';
    // setup and clear the text box
    typedValueElement.value = '';
    typedValueElement.focus();

    // set the event handler and start the timer
    startTime = new Date().getTime();
});

typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;
    if (typedValue === currentWord && wordIndex === words.length - 1) {
        // successfully typed everything
        const elapsedTime = new Date().getTime() - startTime;
        const message = `Congratulations mate, you done it in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
    }
    else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        typedValueElement.value = '';
        wordIndex++;
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        quoteElement.childNodes[wordIndex].className = 'highlight';
    }
    else if (currentWord.startsWith(typedValue)) {
        // currently whatever we type is correct
        typedValueElement.className = '';
    }
    else {
        // we are typing wrong
        typedValueElement.className = 'error';
    }
});