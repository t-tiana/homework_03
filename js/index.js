'use strict';
// Класна робота

// 3. Емуляція гри в кубики, юзер клацає на конфірм та отримує 2 результати (кубики стандартні 1-6 значення на них.)
//    Якщо випадае 2, вивести додаткове що це - джекпот!

const DIE1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
const DIE2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

alert(`Let's play dice! ${DIE1}:${DIE2}`);

if (DIE1 === 6 && DIE2 === 6) {
    alert('Jackpot!');
}

// 4. Створіть програму, яка запитує у юзера 2 значення та виводить рандомно число цими 2 значеннями.

const MINRANDOM = Number(prompt('Input the minimum number to generate random one.', '1'));
const MAXRANDOM = Number(prompt('Input the maximum number to generate random one.', '44'));
const GENRANDOM = Math.floor(Math.random() * (MAXRANDOM - MINRANDOM + 1)) + MINRANDOM;
alert(GENRANDOM);

// 5. Створити масив, у якому буде З юзера як об`єкти з такими полями - age, name, hobby (теж повинно бути масивом).

const USERS = [
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

console.log(USERS[0].hobby[0]);

// ДЗ:

// ✓ 1. Проекспериментувати з типами даних.

// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації -
//    у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і
//    перевіряти чи не прийшов вам null or undefined.

const INPUTMONEYAMOUNT = parseFloat(Number(prompt('Input the amount of your UAH.')).toFixed(2));

if (INPUTMONEYAMOUNT === null
    || INPUTMONEYAMOUNT === 0
    || INPUTMONEYAMOUNT === undefined
    || Number.isNaN(INPUTMONEYAMOUNT)) {
    alert('Hey, dude! Input the amount of your money!');
} else {
    const CHOSECURRENCY = prompt('Choose the currency. Input \'usd\', \'eur\', \'gold\' or \'brent\' for brent oil.');
    const ERRORMESSAGE = 'What about choosing currency?';

    if (CHOSECURRENCY === null || CHOSECURRENCY === undefined) {
        alert(ERRORMESSAGE);
    } else {
        const CURRENCIESINDEX = {
            usd: 0.0358878481,
            eur: 0.0297110195
        };

        const SUBSOILASSETSINDEX = {
            brent: 0.0153869826,
            gold: 0.0005627144
        };

        let usdRelatedIndex = {
            brent: CURRENCIESINDEX.usd * SUBSOILASSETSINDEX.brent,
            gold: CURRENCIESINDEX.usd * SUBSOILASSETSINDEX.gold
        };
        if (CHOSECURRENCY === 'usd'
            || CHOSECURRENCY === 'eur'
            || CHOSECURRENCY === 'gold'
            || CHOSECURRENCY === 'brent') {

            if (CHOSECURRENCY === 'usd') {
                const USD = (INPUTMONEYAMOUNT * CURRENCIESINDEX.usd).toFixed(2);
                alert(`You'll get ${USD} USD.`);

            } else if (CHOSECURRENCY === 'eur') {
                const EUR = (INPUTMONEYAMOUNT * CURRENCIESINDEX.eur).toFixed(2);
                alert(`You'll get ${EUR} EUR.`);

            } else if (CHOSECURRENCY === 'gold') {
                const GOLD = (INPUTMONEYAMOUNT * usdRelatedIndex.gold).toFixed(2);
                alert(`You'll get ${GOLD} oz.`);

            } else if (CHOSECURRENCY === 'brent') {
                const BRENT = (INPUTMONEYAMOUNT * usdRelatedIndex.brent).toFixed(2);
                alert(`You'll get ${BRENT} bbl.`);
            }
        } else {
            alert(ERRORMESSAGE);
        }
    }
}

// 3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки :
//    до 500 гривень знижка -1%,
//    від 500 до 1000 - 5%,
//    більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок!

const INPUTORDERSUM = parseFloat(Number(prompt('Input your order sum. It can be decimal like \'100.00\'')).toFixed(2));

if (INPUTORDERSUM === null
    || INPUTORDERSUM === 0
    || INPUTORDERSUM === undefined
    || Number.isNaN(INPUTORDERSUM)) {
    alert('Try again. Enter a number.');
} else {

    if (INPUTORDERSUM < 500) {
        const DISCOUNT1PERCENTTOTAL = (INPUTORDERSUM - INPUTORDERSUM * 0.01).toFixed(2);
        alert(`Your discount is 1%. Total: ${DISCOUNT1PERCENTTOTAL} UAH`);
    }

     else if (INPUTORDERSUM >= 500 && INPUTORDERSUM < 1000) {
        const DISCOUNT5PERCENTTOTAL = (INPUTORDERSUM - INPUTORDERSUM * 0.05).toFixed(2);
        alert(`Your discount is 5%. Total: ${DISCOUNT5PERCENTTOTAL} UAH`);

    } else if (INPUTORDERSUM >= 1000) {
        const DISCOUNT10PERCENTTOTAL = (((INPUTORDERSUM - INPUTORDERSUM * 0.1)) - 200).toFixed(2);
        alert(`Your discount is 10%! And also a 200 UAH gift card is applied! Total: ${DISCOUNT10PERCENTTOTAL} UAH`);
    }

}

// 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань,
//    вірна відповідь - 1 бал, якщо юзер відповістьправильно на всі 5 запитань - додатково додати 1 бонусний бал.

alert('Let\'s start a test! Only 5 questions:) Type in the letter \'a\', \'b\', \'c\', or \'d\' to answer.')

const QUESTION1 = prompt('1. What\'s the value of result?' +
    ' const result = Math.round(19.95); ' +
    '--- a: 20; b: 19; c: NaN.').toLowerCase();

const QUESTION2 = prompt('2. What\'s the value of result? ' +
    'const value = -456;' +
    ' const result = Math.abs(value); ' +
    '--- a: 456; b: 1; c: -456.').toLowerCase();

const QUESTION3 = prompt('3. What\'s the value of result? ' +
    'const result = 11 % 3; ' +
    '--- a: NaN; b: 2; c: 1; d: 0.').toLowerCase();

const QUESTION4 = prompt('4. What\'s the value of result? ' +
    'const value = new Set([1, 2, 3]); ' +
    'value.add(1); ' +
    'const result = value.size; ' +
    '--- a: 2; b: 3; c: 4.').toLowerCase();

const QUESTION5 = prompt('5. What\'s the value of result? ' +
    'const array = [1, 2, 3]; ' +
    'const result = array.includes(2); ' +
    '--- a: throw a TypeError; b: false; c: true.').toLowerCase();

let testResult = 0;

if (QUESTION1 === 'a') {
    testResult += 1;
}

if (QUESTION2 === 'a') {
    testResult += 1;
}

if (QUESTION3 === 'b') {
    testResult += 1;
}

if (QUESTION4 === 'b') {
    testResult += 1;
}
if (QUESTION5 === 'c') {
    testResult += 1;
}

if (testResult  === 5) {
    testResult  += 1;
}


alert(`Your result is ${testResult}`);


// 5. Запитатись у користувача 3-значне число та сказати чи є у ньому однакові цифри.

const NUMINPUT = Number(prompt('Enter a 3-character number.').substr(0, 3));

if (NUMINPUT === null
    || NUMINPUT === 0
    || NUMINPUT === undefined
    || Number.isNaN(NUMINPUT)) {

    alert('Try again with a number.');

} else {

    const NUMARRAY = Array.from(String(NUMINPUT), Number);
    const UNIQUE = Array.from(new Set(NUMARRAY));

    if (UNIQUE.length >= 3) {
        alert(`Your number ${NUMINPUT} doesn\'t include duplicated numerals.`);
    } else if (UNIQUE.length << 3) {
        alert(`Your number ${NUMINPUT} includes duplicated numerals.`);
    }
}

// 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.

const KEY = prompt('Press a key on the keyboard from \'1\' till \'=\' and press \'Enter\'').substr(0, 1);

if (KEY === '1') {
    alert('\'1\' + \'Shift\' = \'!\'');
} else if (KEY === '2') {
    alert('\'2\' + \'Shift\' = \'@\'');
} else if (KEY === '3') {
    alert('\'3\' + \'Shift\' = \'#\'');
} else if (KEY === '4') {
    alert('\'4\' + \'Shift\' = \'$\'');
} else if (KEY === '5') {
    alert('\'5\' + \'Shift\' = \'%\'');
} else if (KEY === '6') {
    alert('\'6\' + \'Shift\' = \'^\'');
} else if (KEY === '7') {
    alert('\'7\' + \'Shift\' = \'&\'');
} else if (KEY === '8') {
    alert('\'8\' + \'Shift\' = \'*\'');
} else if (KEY === '9') {
    alert('\'9\' + \'Shift\' = \'(\'');
} else if (KEY === '0') {
    alert('\'0\' + \'Shift\' = \')\'');
} else if (KEY === '-') {
    alert('\'-\' + \'Shift\' = \'_\'');
} else if (KEY === '=') {
    alert('\'=\' + \'Shift\' = \'+\'');
} else {
    alert('Try again! Press one of these keys: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -, =.');
}
