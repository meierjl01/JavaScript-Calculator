// document.querySelector('.num1');
// var number1 = document.querySelector('.num1');
// console.dir(number1);
//
// document.querySelector('.num2');
// var number2 = document.querySelector('.num2');
// console.dir(number2);

document.querySelector('.calc').onclick = function () {
  // console.log('hi');

  var number1 = Number(document.querySelector('.num1').value);
  var number2 = Number(document.querySelector('.num2').value);
  var number3 = number1 + number2;
  document.querySelector('.num3').value = number3;
  console.log(number3);

};
