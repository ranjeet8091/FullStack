

let words = [
    "elephant",   // 8 letters
    "football",   // 8 letters
    "airplane",   // 8 letters
    "internet",   // 8 letters
    "computer",   // 8 letters
    "dinosaur",   // 8 letters
    "keyboard",   // 8 letters
    "mountain",   // 8 letters
    "umbrella",   // 8 letters
    "building",   // 9 letters
    "fantastic",  // 9 letters
    "pineapple",  // 9 letters
    "chocolate",  // 9 letters
    "adventure",  // 9 letters
    "dashboard",  // 9 letters
    "dangerous",  // 9 letters
    "television", // 10 letters
    "basketball", // 10 letters
    "university", // 10 letters
    "innovation"  // 10 letters
];

let index = Math.floor(Math.random() * words.length)
console.log(index);

let selectedWord = words[index];
console.log(selectedWord);

let letters = selectedWord.split("");
console.log(letters)
let attempt = 2;

function display() {
    let wordsString = document.querySelector(".container");
    wordsString.innerHTML = "";
    let emptyLimit = Math.floor(Math.random() * 3) + 3;

    //letter to hide
    const charIndex = Math.floor(Math.random() * letters.length - 1) + 1 // +1 gives every time on empty input
    console.log(charIndex)

    for (let i = 0; i < letters.length; i++) {
        if (Math.random() > 0.5 && emptyLimit > 0) {
            let input = document.createElement("input");
            input.setAttribute('type', 'text')
            input.setAttribute('maxlength', '1');
            input.setAttribute('class', 'letter-input');
            input.setAttribute('id', 'letter-' + i);
            wordsString.append(input);
            emptyLimit--;
        }
        else {
            wordsString.append(letters[i].toUpperCase() + " ");
        }
    }
}

function check() {
    let result = document.querySelector("#result");
    result.innerHTML = ""


    if (attempt) {
        attempt--;
        let inputs = document.querySelectorAll(".letter-input");
        let Correct = true;
        inputs.forEach(input => {
            index = input.id.split("-")[1];
            if (letters[index].toUpperCase() != input.value.toUpperCase()) {
                Correct = false;
            }
        })

        if (Correct) {
            let h2 = document.createElement("h2");
            h2.innerHTML = "Congratulation Correct Guess";
            result.append(h2)
        }
        else {
            let h2 = document.createElement("h2");
            h2.innerHTML = `Oops Incorrect Guess <br> <br> Remaining Attemp ${attempt}/2`;
            h2.style.color = "red"
            result.append(h2)
        }

    }
    if (attempt == 0) {
        let btnsub = document.querySelector("#sub-btn");
        btnsub.setAttribute('disabled', true);
        let h2 = document.createElement("h2");
        h2.innerHTML = `No more Attempts`;
        result.append(h2);

    }

}

function next() {
    index = Math.floor(Math.random() * words.length)
    selectedWord = words[index];

    letters = selectedWord.split("");
    console.log(letters)
    attempt = 2;

    let btnsub = document.querySelector("#sub-btn");
    btnsub.removeAttribute('disabled');


    display();
}
window.onload = display();