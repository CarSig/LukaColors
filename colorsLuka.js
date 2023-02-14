const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");
const word3 = document.getElementById("word3");
const word4 = document.getElementById("word4");
const submit = document.getElementById("submit");
const words = [word1, word2, word3, word4];


submit.addEventListener("click", (e) => {
    e.preventDefault();
    words.forEach((word) => {

        const div1Name = `color${word.id}a`;
        const div2Name = `color${word.id}b`;
        const wordValue = word.value;
        const colors = wordToNumber(wordValue);
        renderColors(colors.firstColor, colors.secondColor, div1Name, div2Name);
    })
});


// get all letters of the alphabet
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

// assign to each letter number, start with 0 and last is 127
const lettersWithNumbers = letters.map((letter, index) => {
    return {
        letter,
        number: Math.round(index * 5.1),
        index: index
    }
})





//function that takes a word and returns number value of the word
const wordToNumber = (word) => {
    // get six combinations of 2 letters, 

    const firstTwoLetters = word[0] + word[1];
    const firstAndThirdLetter = word[0] + word[2];
    const firstAndFourthLetter = word[0] + word[3];
    const secondAndThirdLetter = word[1] + word[2];
    const secondAndFourthLetter = word[1] + word[3];
    const thirdAndFourthLetter = word[2] + word[3];

    // for each combination, get sum of the numbers of the letters
    const combinationsArr = [firstTwoLetters, firstAndThirdLetter, firstAndFourthLetter, secondAndThirdLetter, secondAndFourthLetter, thirdAndFourthLetter]

    const combinationsWithNumbers = combinationsArr.map((combination) => {
        const firstLetterNumber = lettersWithNumbers.find((letterWithNumber) => letterWithNumber.letter === combination[0]).number;
        const secondLetterNumber = lettersWithNumbers.find((letterWithNumber) => letterWithNumber.letter === combination[1]).number;
        return firstLetterNumber + secondLetterNumber;

    })


    // from first three return color in rgb format, each number between 0 and 255
    const firstColor = `rgb(${combinationsWithNumbers[0]}, ${combinationsWithNumbers[1]}, ${combinationsWithNumbers[2]})`
    const secondColor = `rgb(${combinationsWithNumbers[3]}, ${combinationsWithNumbers[4]}, ${combinationsWithNumbers[5]})`

    // return object with two colors
    return {
        firstColor,
        secondColor

    }
}


// function that takes two colors and  updates the divs with the colors


function renderColors(firstColor, secondColor, div1, div2) {
    const div1Name = document.getElementById(div1);
    const div2Name = document.getElementById(div2);
    div1Name.style.backgroundColor = firstColor;
    div2Name.style.backgroundColor = secondColor;
}









