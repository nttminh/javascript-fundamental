// 1. write a function that takes 3 integers, print out in the ascending order
function printAscending(firstNumber, secondNumber, thirdNumber) {
    // check error, must be number, no decimal, total arguments must be 3
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number' || typeof thirdNumber !== 'number' || firstNumber % 1 !== 0 || secondNumber % 1 !== 0 || thirdNumber % 1 !== 0 || arguments.length !== 3) {
        console.log('Input Error');
        return;
    }

    let arr = [firstNumber, secondNumber, thirdNumber];
    arr.sort((a, b) => a - b);
    console.log(arr[0], arr[1], arr[2]);
}
// printAscending(-5, -12, -7);

// 2. write a function that takes day, month, year, find day, month, year of the next day
function nextDay(day, month, year) {
    // check error, must be number, no decimal, total arguments must be 3
    if (typeof day !== 'number' || typeof month !== 'number' || typeof year !== 'number' || day % 1 !== 0 || month % 1 !== 0 || year % 1 !== 0 || arguments.length !== 3) {
        console.log('Input Error');
        return;
    }

    let nextDay = new Date(year, month - 1, day + 1);
    console.log("Day: " + nextDay.getDate(), " /  Month: " + nextDay.getMonth() + 1, " / Year: " + nextDay.getFullYear());
}
// nextDay(1, 1, 2022);

// 3. Write a hello program in javascript
function hello() {
    // ask who is using the computer, 4 options (B, M, A, E)
    let user = prompt("Cho tớ hỏi ai đang sử dụng máy tính ạ? (B, M, A, E)");
    user = user.toUpperCase();
    // print hello message for the associate user
    switch (user) {
        case 'B':
            console.log('Xin chào Bố');
            break;
        case 'M':
            console.log('Xin chào Mẹ');
            break;
        case 'A':
            console.log('Xin chào Anh trai');
            break;
        case 'E':
            console.log('Xin chào Em gái');
            break;
        default:
            console.log('Input Error');
            break;
    }
}
// hello();

// 4. write a function take 3 integers, print the count of odd and even numbers
function countOddAndEven(firstNumber, secondNumber, thirdNumber) {
    // check error, must be number, no decimal, total arguments must be 3
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number' || typeof thirdNumber !== 'number' || firstNumber % 1 !== 0 || secondNumber % 1 !== 0 || thirdNumber % 1 !== 0 || arguments.length !== 3) {
        console.log('Input Error');
        return;
    }

    let odd = 0;
    let even = 0;
    let arr = [firstNumber, secondNumber, thirdNumber];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    console.log('Số lẻ: ' + odd + ' / Số chẵn: ' + even);
}
// countOddAndEven(0, 2, 1);

// 5. write a program ask month, year, print out the number of days in that month
function daysInMonth(month, year) {
    // check error, must be number, no decimal, total arguments must be 2
    if (typeof month !== 'number' || typeof year !== 'number' || month % 1 !== 0 || year % 1 !== 0 || arguments.length !== 2) {
        console.log('Input Error');
        return;
    }

    let days = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            if (year % 4 === 0) {
                days = 29;
            } else {
                days = 28;
            }
            break;
        default:
            console.log('Input Error');
            break;
    }
    console.log('Tháng ' + month + ' có ' + days + ' ngày');
}
// daysInMonth(2, 2021);

// 6. given 3 x,y coordinates of 3 students, and 1 x,y coordinate of the school, find the furthest student from the school
var student1 = { name: "Nguyễn Thành Nam", coordinate: [-3, 4] };
var student2 = { name: "Nguyễn Thị Thúy", coordinate: [1, -1] };
var student3 = { name: "Nguyễn Thị Thảo", coordinate: [2, -4] };
var school = { name: "Trường Đại Học Bách Khoa", coordinate: [0, 0] };
function findFurthestStudent(student1, student2, student3, school) {
    // check error, must be number, no decimal, total arguments must be 4
    if (
        typeof student1.coordinate[0] !== 'number' || typeof student1.coordinate[1] !== 'number' ||
        typeof student2.coordinate[0] !== 'number' || typeof student2.coordinate[1] !== 'number' ||
        typeof student3.coordinate[0] !== 'number' || typeof student3.coordinate[1] !== 'number' ||
        typeof school.coordinate[0] !== 'number' || typeof school.coordinate[1] !== 'number' ||
        student1.coordinate[0] % 1 !== 0 || student1.coordinate[1] % 1 !== 0 ||
        student2.coordinate[0] % 1 !== 0 || student2.coordinate[1] % 1 !== 0 ||
        student3.coordinate[0] % 1 !== 0 || student3.coordinate[1] % 1 !== 0 ||
        school.coordinate[0] % 1 !== 0 || school.coordinate[1] % 1 !== 0 ||
        arguments.length !== 4) {
        console.log('Input Error');
        return;
    }

    var arr = [student1, student2, student3];
    var maxDistance = 0;
    var furthestStudent = '';
    for (var i = 0; i < arr.length; i++) {
        var distance = Math.sqrt(Math.pow(arr[i].coordinate[0] - school.coordinate[0], 2) + Math.pow(arr[i].coordinate[1] - school.coordinate[1], 2));
        if (distance > maxDistance) {
            maxDistance = distance;
            furthestStudent = arr[i];
        }
    }
    console.log('Học sinh xa nhất: ' + furthestStudent.name + ' / Tọa độ: ' + furthestStudent.coordinate);
}
// findFurthestStudent(student1, student2, student3, school);

// 7. write a function to find the absolute value of 3 number
function calculateAbsolute(number1, number2, number3) {
    // check error, if isNaN then print error
    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        console.log('Input Error');
        return;
    }

    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        console.log('Số thứ ' + (i + 1) + ': ' + Math.abs(element));
    }

}
// calculateAbsolute(-15, 0, -1);

// 8. write a program to ask for an integer with 3 digits, print out how to pronounce the number
function pronounceNumber(number) {
    // check error, if isNaN then print error
    if (isNaN(number) || number < 100 || number > 999) {
        console.log('Input Error');
        return;
    }

    number = parseInt(number);
    console.log('Bạn nhập vào: ' + number);

    var firstDigit = number % 10;
    var secondDigit = (number % 100 - firstDigit) / 10;
    var thirdDigit = (number - firstDigit - secondDigit * 10) / 100;

    var sentence = '';

    function numberToWord(number) {
        switch (number) {
            case 0:
                return 'Không';
            case 1:
                return 'Một';
            case 2:
                return 'Hai';
            case 3:
                return 'Ba';
            case 4:
                return 'Bốn';
            case 5:
                return 'Năm';
            case 6:
                return 'Sáu';
            case 7:
                return 'Bảy';
            case 8:
                return 'Tám';
            case 9:
                return 'Chín';
            default:
                break;
        }
    }

    if (number % 100 === 0) {
        sentence = numberToWord(thirdDigit) + ' trăm';
        console.log('Cách đọc: ' + sentence);
        return;
    }

    if (secondDigit === 0) {
        sentence = numberToWord(thirdDigit) + ' trăm lẻ ' + numberToWord(firstDigit);
        console.log('Cách đọc: ' + sentence);
        return;
    }

    if (number % 10 === 0) {

        sentence = numberToWord(thirdDigit) + ' trăm ' + numberToWord(secondDigit) + ' mươi';
        console.log('Cách đọc: ' + sentence);
        return;
    }

    sentence = numberToWord(thirdDigit) + ' trăm ' + numberToWord(secondDigit) + ' mươi ' + numberToWord(firstDigit);
    console.log('Cách đọc: ' + sentence);
}
// pronounceNumber(121);

// 9. write a function takes 3 sides of a triangle and print out the type of triangle
function triangleType(side1, side2, side3) {
    // check error, if isNaN then print error
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        console.log('Input Error');
        return;
    }
    // parseInt 
    side1 = parseInt(side1);
    side2 = parseInt(side2);
    side3 = parseInt(side3);

    // arrange side1, side2, side3 in ascending order
    if (side1 > side2) {
        let temp = side1;
        side1 = side2;
        side2 = temp;
    }
    if (side2 > side3) {
        let temp = side2;
        side2 = side3;
        side3 = temp;
    }
    if (side1 > side2) {
        let temp = side1;
        side1 = side2;
        side2 = temp;
    }

    // print out the type of triangle
    if (side1 + side2 <= side3) {
        console.log('Không phải là một tam giác');
        return;
    }
    if (side1 === side2 && side2 === side3) {
        console.log('Là tam giác đều');
        return;
    }
    if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log('Là tam giác cân');
        return;
    }
    console.log('Là tam giác thường');

}
// triangleType(3, 4, 5);