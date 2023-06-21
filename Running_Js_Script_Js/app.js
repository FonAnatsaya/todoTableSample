let maximum = parseInt(prompt('Enter the maximum number!!'));
while (!maximum) {
    maximum = prompt('The number is invalid!');
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
let guess = prompt('Enter your first guess! (Type "q" to quit!)');
let attemp = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attemp++;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt('It is too long! Enter your next guess.');
    }

    else if (guess < targetNum) {
        guess = prompt('It is too short! Enter your next guess.');
    }

    else {
        guess = prompt('Invalid number!!, or, enter "q" to quit!!');
    }
}

if (guess === 'q') {
    console.log('You quit the guessing game! Thank you ^^');
}
else {
    console.log(`You got it! Congratulation! It took you ${attemp} guesses.`);
}
