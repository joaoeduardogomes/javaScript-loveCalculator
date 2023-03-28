function charCount(string, letter) {
    let letterCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            letterCount++;
        }
    }

    return letterCount;
}

function getNames() {
    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();

    if (name1.length < 1 || name2.length < 1) {
        alert("Please inform us the both names to proceed.");
        return;
    }

    return {name1, name2};
}

function score(name1, name2) {
    t = charCount(name1, "t") + charCount(name2, "t");
    r = charCount(name1, "r") + charCount(name2, "r");
    u = charCount(name1, "u") + charCount(name2, "u");
    e = charCount(name1, "e") + charCount(name2, "e");
    
    l = charCount(name1, "l") + charCount(name2, "l");
    o = charCount(name1, "o") + charCount(name2, "o");
    v = charCount(name1, "v") + charCount(name2, "v");

    const wordTrue = Number(t + r+ u + e);
    const wordLove = Number (l + o + v + e);

    const trueLove = String(wordTrue) + String(wordLove);
    Number(trueLove);

    return scoreCheck(trueLove);
}

function scoreCheck(score) {
    if (score < 10 || score > 90) {
        return `Your score is ${score}, you go together like coke and mentos.`;
    }
    else if (40 <= score <= 50) {
        return `Your score is ${score}, you are alright together.`
    }
    else {
        return `Your score is ${score}.`
    }
}


const resDiv = document.querySelector('div.hidden');
const output = document.querySelector('p#output');

const button = document.querySelector('button#btn');
button.addEventListener('click', () => {
    const {name1, name2} = getNames();

    const result = score(name1, name2);

    resDiv.classList.remove('hidden');
    output.textContent = result;
    
    console.log(result);
})