let words = ['google', 'javascript', 'react', 'microsoft'
];
let qIndex = 0;
let text_box = document.querySelector('.text_box');
let check = document.querySelector('.check');
let currentAnswer
let random
const second=5
let seconds = second;

let timerStart;
let result = {
    correct: 0,
    wornings: 0
}

function question() {
    console.log(words)
    if (!words.length) {
        clearInterval(timerStart)
        gameOver()

    }
    let info = ''
    random = Math.floor(Math.random() * words.length);
    currentAnswer = words[random];
    text_box.innerHTML = refreshEd(currentAnswer)
    timer()
}
question()

function refreshEd(str=" ") {
    let array = str.split('');
    let res = '';
    for (let i = 0; i < array.length; i++) {
        let num = Math.floor(Math.random() * array.length);
        res += array[num];
        array.splice(num, 1);
        i--;
    }
    return res;
}

check.addEventListener('click', function (e) {
    if (!words.length) {
        gameOver()
        return
    }
if(seconds>0){
    words.splice(random, 1)
    let answer = document.querySelector('.answer');
    if (answer.value === currentAnswer) {
        result.correct++
    } else {
        result.wornings++
    }
    answer.value = ''
    if (words.length) {
        seconds=second
        question()

    }

}

})

function gameOver() {
    text_box.innerHTML = ''
    console.log(result)
    alert('xaxy avartvec')

}

function timer() {
    if(timerStart){
        clearInterval(timerStart)
    }
    let time = document.querySelector('.time');

    timerStart = setInterval(() => {
        seconds--;
        time.innerHTML = `Time Left: ${seconds}s`;

        if(seconds===0){
            words.splice(random, 1)
            result.wornings++
            seconds=second
            if (words.length) {
                question()

            }else{
                gameOver()
                clearInterval(timerStart)
            }
        }
    }, 700);
}