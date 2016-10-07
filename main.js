// document.querySelector('.num1');
// var number1 = document.querySelector('.num1');
// console.dir(number1);
//
// document.querySelector('.num2');
// var number2 = document.querySelector('.num2');
// console.dir(number2);

document.querySelector('.plus').onclick = function() {
    // console.log('hi');
    var number1 = Number(document.querySelector('.num1').value);
    var number2 = Number(document.querySelector('.num2').value);
    var number3 = number1 + number2;
    document.querySelector('.num3').value = number3;

    if (isNaN(number3)) {
        document.querySelector('.num3').value = alert('Not a valid number');
        console.log('Not a valid number');
    }
    console.log(number3);
};

document.querySelector('.minus').onclick = function() {
    // console.log('hi');
    var number1 = Number(document.querySelector('.num1').value);
    var number2 = Number(document.querySelector('.num2').value);
    var number3 = number1 - number2;
    document.querySelector('.num3').value = number3;

    if (isNaN(number3)) {
        document.querySelector('.num3').value = alert('Not a valid number');
        console.log('Not a valid number');
    }
    console.log(number3);
};

document.querySelector('.divide').onclick = function() {
    // console.log('hi');
    var number1 = Number(document.querySelector('.num1').value);
    var number2 = Number(document.querySelector('.num2').value);
    var number3 = number1 / number2;
    document.querySelector('.num3').value = number3;

    if (isNaN(number3)) {
        document.querySelector('.num3').value = alert('Not a valid number');
        console.log('Not a valid number');
    }
    console.log(number3);
};

document.querySelector('.multiply').onclick = function() {
    // console.log('hi');
    var number1 = Number(document.querySelector('.num1').value);
    var number2 = Number(document.querySelector('.num2').value);
    var number3 = number1 * number2;
    document.querySelector('.num3').value = number3;

    if (isNaN(number3)) {
        document.querySelector('.num3').value = alert('Not a valid number');
        console.log('Not a valid number');
    }
    console.log(number3);
};
