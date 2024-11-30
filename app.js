

// Типы двнных в JS их 8

// 1 string
// 2 number
// 3 null
// 4 bigint  ---
// 5 undefined
// 6 symbol ---
// 7 boolean
// 8 object - {} and []

// const let var 
// 1995 var
// ES5 - 2015 -- const let
//const age = 20 // нельзя изменять значние
// EcmaScript 5 
// EcmaScript 6 ...
// EcmaScript 13 2024    @final

//var text = "Hello"
// if (true) {
//     var text = "Hi"
// }
// var text = "Hi"
// console.log(text)

console.log(t) // undefined
var t = "AAA" // hoisting and function only with var


// a1()
//function declaration
function a1() {
    var a = 10
    console.log(a)
}
function a1() {
    var a = 20
    console.log(a)
}


//expression function
const a12 = function () { }
// arrow function
const a2 = () => { }


const numbers = [10, 20, 30, 40, 50, 60]
//index =    0---1---2
const c = numbers[4] + numbers[4]
console.log(c)

console.log(numbers.length)

const userName = "Nazima"
console.log(userName.length)

function add(a, b) {
    console.log(add.length) // к массиву к символам и параметр
}

function findSymbol(name, symbol) {
    let count = 0

    for (const element of name) {
        if (element.toLowerCase() === symbol) {
            count = count + 1
        }
    }
    console.log(count + "tamga bar")
}

findSymbol("Nazima", "a")
findSymbol("Aizaada", "a")

function generatePin(number) {
    let pin;

    if (number == 4) {
        pin = Math.random() * 9000
        console.log(Math.round(pin + 1000))
        console.log(pin.toFixed())
    }
    if (number == 6) {
        pin = Math.random() * 900000
        console.log(Math.round(pin + 100000))
        console.log(pin.toFixed())
    }
}

generatePin(4)
generatePin(6)

function play(playerChoice) {
    const choices = ['rock', 'scissors', 'paper'];
  
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]

    let result = '';

    if (playerChoice === computerChoice) {
        result = 'Ничья!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = 'Вы выиграли!';
    } else {
        result = 'Вы проиграли!';
    }

    document.getElementById('result').innerText = `Твой выбор: ${playerChoice}. Компьютер выбрал: ${computerChoice}. ${result}`;
}
