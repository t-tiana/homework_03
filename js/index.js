'use strict';
// Класна робота

// 3. Емуляція гри в кубики, юзер клацає на конфірм та отримує 2 результати (кубики стандартні 1-6 значення на них.)
//    Якщо випадае 2, вивести додаткове що це - джекпот!

let die1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let die2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

alert(`Let's play dice! ${die1}:${die2}`);

if (die1 === 6 && die2 === 6) {
    alert('Jackpot!');
}

// 4. Створіть програму, яка запитує у юзера 2 значення та виводить рандомно число цими 2 значеннями.

let minRandom = Number(prompt('Input the minimum number to generate random one.', '1'));
let maxRandom = Number(prompt('Input the maximum number to generate random one.', '44'));
let genRandom = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
alert(genRandom);

// 5. Створити масив, у якому буде З юзера як об`єкти з такими полями - age, name, hobby (теж повинно бути масивом).

const users = [
    {
        name: 'Karl',
        age: 30,
        hobby: ['beer tasting', 'glassblowing', 'candy making']
    },

    {
        name: `August`,
        age: 19,
        hobby: [`lapidary`, `scuba diving`]
    },

    {
        name: `Afanasy`,
        age: 45,
        hobby: [`gardening`, `wood carving`, `pet adoption`]
    }
];

console.log(users[0].hobby[0]);

// ДЗ:

// ✓ 1. Проекспериментувати з типами даних.

// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації -
//    у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і
//    перевіряти чи не прийшов вам null or undefined.

let inputMoneyAmount = parseFloat(Number(prompt('Input the amount of your UAH.')).toFixed(2));

if (inputMoneyAmount === null
    || inputMoneyAmount === 0
    || inputMoneyAmount === undefined
    || Number.isNaN(inputMoneyAmount)) {
    alert('Hey, dude! Input the amount of your money!');
} else {
    let choseCurrency = prompt('Choose the currency. Input \'usd\', \'eur\', \'gold\' or \'brent\' for brent oil.');
    let errorMessage = 'What about choosing currency?';

    if (choseCurrency === null || choseCurrency === undefined) {
        alert(errorMessage);
    } else {
        let currenciesIndex = {
            usd: 0.0358878481,
            eur: 0.0297110195
        };

        let subsoilAssetsIndex = {
            brent: 0.0153869826,
            gold: 0.0005627144
        };

        let usdRelatedIndex = {
            brent: currenciesIndex.usd * subsoilAssetsIndex.brent,
            gold: currenciesIndex.usd * subsoilAssetsIndex.gold
        };
        if (choseCurrency === 'usd'
            || choseCurrency === 'eur'
            || choseCurrency === 'gold'
            || choseCurrency === 'brent') {

            if (choseCurrency === 'usd') {
                let usd = (inputMoneyAmount * currenciesIndex.usd).toFixed(2);
                alert(`You'll get ${usd} USD.`);

            } else if (choseCurrency === 'eur') {
                let eur = (inputMoneyAmount * currenciesIndex.eur).toFixed(2);
                alert(`You'll get ${eur} EUR.`);

            } else if (choseCurrency === 'gold') {
                let gold = (inputMoneyAmount * usdRelatedIndex.gold).toFixed(2);
                alert(`You'll get ${gold} oz.`);

            } else if (choseCurrency === 'brent') {
                let brent = (inputMoneyAmount * usdRelatedIndex.brent).toFixed(2);
                alert(`You'll get ${brent} bbl.`);
            }
        } else {
            alert(errorMessage);
        }
    }
}

// 3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки :
//    до 500 гривень знижка -1%,
//    від 500 до 1000 - 5%,
//    більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок!

let inputOrderSum = parseFloat(Number(prompt('Input your order sum. It can be decimal like \'100.00\'')).toFixed(2));

if (inputOrderSum === null
    || inputOrderSum === 0
    || inputOrderSum === undefined
    || Number.isNaN(inputOrderSum)) {
    alert('Try again. Enter a number.');
} else {

    if (inputOrderSum < 500) {
        let discount1PercentTotal = (inputOrderSum - inputOrderSum * 0.01).toFixed(2);
        alert(`Your discount is 1%. Total: ${discount1PercentTotal} UAH`);
    }

     else if (inputOrderSum >= 500 && inputOrderSum < 1000) {
        let discount5PercentTotal = (inputOrderSum - inputOrderSum * 0.05).toFixed(2);
        alert(`Your discount is 5%. Total: ${discount5PercentTotal} UAH`);

    } else if (inputOrderSum >= 1000) {
        let discount10PercentTotal = (((inputOrderSum - inputOrderSum * 0.1)) - 200).toFixed(2);
        alert(`Your discount is 10%! And also a 200 UAH gift card is applied! Total: ${discount10PercentTotal} UAH`);
    }

}

// 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань,
//    вірна відповідь - 1 бал, якщо юзер відповістьправильно на всі 5 запитань - додатково додати 1 бонусний бал.

alert('Let\'s start a test! Only 5 questions:) Type in the letter \'a\', \'b\', \'c\', or \'d\' to answer.')

const question1 = prompt('1. What\'s the value of result?' +
    ' const result = Math.round(19.95); ' +
    '--- a: 20; b: 19; c: NaN.').toLowerCase();

const question2 = prompt('2. What\'s the value of result? ' +
    'const value = -456;' +
    ' const result = Math.abs(value); ' +
    '--- a: 456; b: 1; c: -456.').toLowerCase();

const question3 = prompt('3. What\'s the value of result? ' +
    'const result = 11 % 3; ' +
    '--- a: NaN; b: 2; c: 1; d: 0.').toLowerCase();

const question4 = prompt('4. What\'s the value of result? ' +
    'const value = new Set([1, 2, 3]); ' +
    'value.add(1); ' +
    'const result = value.size; ' +
    '--- a: 2; b: 3; c: 4.').toLowerCase();

const question5 = prompt('5. What\'s the value of result? ' +
    'const array = [1, 2, 3]; ' +
    'const result = array.includes(2); ' +
    '--- a: throw a TypeError; b: false; c: true.').toLowerCase();

let testResult = 0;

if (question1 === 'a') {
    testResult += 1;
}

if (question2 === 'a') {
    testResult += 1;
}

if (question3 === 'b') {
    testResult += 1;
}

if (question4 === 'b') {
    testResult += 1;
}
if (question5 === 'c') {
    testResult += 1;
}

if (testResult  === 5) {
    testResult  += 1;
}


alert(`Your result is ${testResult}`);


// 5. Запитатись у користувача 3-значне число та сказати чи є у ньому однакові цифри.

let numInput = Number(prompt('Enter a 3-character number.').substr(0, 3));

if (numInput === null
    || numInput === 0
    || numInput === undefined
    || Number.isNaN(numInput)) {

    alert('Try again with a number.');

} else {

    let numArray = Array.from(String(numInput), Number);
    let unique = Array.from(new Set(numArray));

    if (unique.length >= 3) {
        alert(`Your number ${numInput} doesn\'t include duplicated numerals.`);
    } else if (unique.length << 3) {
        alert(`Your number ${numInput} includes duplicated numerals.`);
    }
}

// 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.

const key = prompt('Press a key on the keyboard from \'1\' till \'=\' and press \'Enter\'').substr(0, 1);

if (key === '1') {
    alert('\'1\' + \'Shift\' = \'!\'');
} else if (key === '2') {
    alert('\'2\' + \'Shift\' = \'@\'');
} else if (key === '3') {
    alert('\'3\' + \'Shift\' = \'#\'');
} else if (key === '4') {
    alert('\'4\' + \'Shift\' = \'$\'');
} else if (key === '5') {
    alert('\'5\' + \'Shift\' = \'%\'');
} else if (key === '6') {
    alert('\'6\' + \'Shift\' = \'^\'');
} else if (key === '7') {
    alert('\'7\' + \'Shift\' = \'&\'');
} else if (key === '8') {
    alert('\'8\' + \'Shift\' = \'*\'');
} else if (key === '9') {
    alert('\'9\' + \'Shift\' = \'(\'');
} else if (key === '0') {
    alert('\'0\' + \'Shift\' = \')\'');
} else if (key === '-') {
    alert('\'-\' + \'Shift\' = \'_\'');
} else if (key === '=') {
    alert('\'=\' + \'Shift\' = \'+\'');
} else {
    alert('Try again! Press one of these keys: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -, =.');
}
