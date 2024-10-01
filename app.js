
// array.forEach(function(currentValue, index, array) {
//     // code to execute for each element
// });

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//     console.log(number);
// });

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach(function(fruit, index ,arr) {
//     // console.log(`${index} : ${fruit}`);
//     console.log(`${index}: ${fruit}: ${arr}`);
// });

const displayInput = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

buttons.forEach(function(item) {
    item.addEventListener('click', function() {
        displayInput.value  += item.getAttribute('data-value');
    });
});

clearButton.addEventListener('click', function() {
    display.value = '';
});

equalsButton.addEventListener('click', function() {
        display.value = eval(display.value);
});