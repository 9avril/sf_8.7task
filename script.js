let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;


document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload()
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            answerField.innerText = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
        }
        if (answerNumber < 0) {
            answerField.innerText = `Вы загадали отрицательное число! И это число ${answerNumber }?`;
        } else {
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            answerField.innerText = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
        }
        if (answerNumber < 0) {
            answerField.innerText = `Вы загадали отрицательное число! И это число ${answerNumber }?`;
        } else {
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round(Math.random() * 3)
        // answerField.innerText = (phraseRandon === 1 ) ?
        //     `Я всегда угадываю\n\u{1F60E}` :
        //     `Это было слишком просто!\n\u{1F60E}`

        if (phraseRandom === 1) {
            answerField.innerText = `Я всегда угадываю\n\u{1F44C}`;
        } else if ( answerField.innerText === (phraseRandom === 2)) {
            answerField.innerText = `Проще простого!\n\u{1F60E}`;
        } else {
            answerField.innerText = `Давай еще раз! Это было слишком легко!\n\u{1F525}`;
        }

        gameRun = false;
    }
})
