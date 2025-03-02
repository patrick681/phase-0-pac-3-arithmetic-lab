function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
let nuber = 5;
function increment(number){
    
    return ++number;

}
function decrement(number){
    
    return --number;

}
function makeInt(str) {
    return parseInt(str, 10);
}
function preserveDecimal(n) {
    return parseFloat(n);
}
function add5(){
    return (number += 5);
}
function divideBy3(){
    return (number /= 3);
}

divideBy3();

add5();

number = 10;

add5();

divideBy3();
