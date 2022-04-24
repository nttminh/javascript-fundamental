// 1. print out 10 rows and 10 columns of numbers from 1 to 100
function printTable() {
    for (let i = 0; i < 10; i++) {
        row = '';
        for (let j = 0; j < 10; j++) {
            col = i * 10 + j + 1;
            row += col + ' ';

        }
        console.log(row);
    }
}
// printTable();

// 2. write a function with parameter is an array of integers, print out all prime numbers in the array
function isPrime(num) {
    // check error, must be number, total arguments must be 1
    if (typeof num !== 'number' || arguments.length !== 1) {
        console.log('Input Error');
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function printPrime(arr) {
    // check error, must be array of integers, total arguments must be 1
    if (!Array.isArray(arr) || arr.length === 0 || arguments.length !== 1) {
        console.log('Input Error');
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            console.log(arr[i]);
        }
    }
}
// printPrime([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

// 3. write a function take n, calculate S=(2+3+4+...+n)+2n
function calculateS(n) {
    // check error, must be number, total arguments must be 1
    if (typeof n !== 'number' || arguments.length !== 1) {
        console.log('Input Error');
        return false;
    }

    let sum = 0;
    for (let i = 2; i <= n; i++) {
        sum += i;
    }
    return sum + 2 * n;
}
// console.log(calculateS(10));

// 4. write a function take an integer, print out all divisors of the integer
function printNumberOfDivisors(num) {
    // check error, must be positive number, no decimal, total arguments must be 1
    if (typeof num !== 'number' || num % 1 !== 0 || num < 0 || arguments.length !== 1) {
        console.log('Input Error');
        return;
    }

    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors.length;
}
// console.log(printNumberOfDivisors(12));

// 5. write a function take a positive integer, return the reverse of the integer
function reverseInteger(num) {
    // check error, must be positive number, no decimal, total arguments must be 1
    if (typeof num !== 'number' || num % 1 !== 0 || num < 0 || arguments.length !== 1) {
        console.log('Input Error');
        return;
    }

    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversed;
}
// console.log(reverseInteger(65841));

// 6. write a function find the biggest positive integer, knowing that 1+2+3+...+x<=100
function findBiggestPositiveIntegerUnder100() {
    var limit = 100;
    var highest = 0;
    var sum = 0;
    while (sum <= limit) {
        highest++;
        sum += highest;
    }
    return highest - 1;
}
// console.log(findBiggestPositiveIntegerUnder100());

// 7. write a function take in a number, print out the multiplication table of that number
function printMultiplicationTable(num) {
    // check error, must be number, total arguments must be 1
    if (typeof num !== 'number' || arguments.length !== 1) {
        console.log('Input Error');
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(num + ' x ' + i + ' = ' + num * i);
    }
}
// printMultiplicationTable(7);

// 8. Given an array that has 4 arrays of string, representing 4 players
// give each player cards as follows:
// var player1 = ["4K", "QH", "AS"]
// var player2 = ["KH", "KD", "7H"]
// var player3 = ["5C", "2H", "9K"]
// var player4 = ["KA", "10S", "10D"]
var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S", "AS", "7H", "9K", "10D"]
var player1 = [];
var player2 = [];
var player3 = [];
var player4 = [];
function giveCards() {
    var players = [[], [], [], []];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < players.length; j++) {
            players[j].push(cards.shift());
        }
    }

    player1 = players[0];
    player2 = players[1];
    player3 = players[2];
    player4 = players[3];
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);

    return players;
}
// giveCards();

// 9. Find the sum of chickens and sum of dogs, given the total number of animals and the total number of legs
function calculateChickensAndDogs(sumOfAnimals, sumOfLegs) {
    // check error, must be number, no decimal, total arguments must be 2
    if (typeof sumOfAnimals !== 'number' || typeof sumOfLegs !== 'number' || arguments.length !== 2) {
        console.log('Input Error');
        return;
    }
    if (sumOfAnimals < 0 || sumOfLegs < 0 || sumOfAnimals % 1 !== 0 || sumOfLegs % 1 !== 0) {
        console.log('Input Error');
        return;
    }

    var sumOfChickens = -2 * (sumOfLegs / 4 - sumOfAnimals);
    var sumOfDogs = sumOfAnimals - sumOfChickens;
    console.log('sumOfChickens: ' + sumOfChickens);
    console.log('sumOfDogs: ' + sumOfDogs);
}
// calculateChickensAndDogs(36, 100);

// 10. Given the number of hour and minutes, print the degree between the hour and minutes
function calculateDegree(hour, minutes) {
    // check error, must be number, total arguments must be 2
    if (typeof hour !== 'number' || typeof minutes !== 'number' || arguments.length !== 2) {
        console.log('Input Error');
        return;
    }
    if (hour < 0 || hour > 12 || minutes < 0 || minutes > 59) {
        console.log('Input Error');
        return;
    }

    var hourDegree = hour * 30 + minutes * 0.5;
    var minutesDegree = minutes * 6;
    var degree = Math.abs(hourDegree - minutesDegree);
    console.log('Góc lệch giữa kim giờ và kim phút là: ' + degree);
}
// calculateDegree(11, 30);

