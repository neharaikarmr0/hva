const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multi = document.getElementById('multi');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const input = document.getElementById('inp');
let val="";
function one(){
    val=val+one.textContent;
    input.value=val;
}
function two(){
    val=val+two.textContent;
    input.value=val;
}
function three(){
    val=val+three.textContent;
    input.value=val;
}
function four(){
    val=val+four.textContent;
    input.value=val;
}
function five(){
    val=val+five.textContent;
    input.value=val;
}
function six(){
    val=val+six.textContent;
    input.value=val;
}
function seven(){
    val=val+seven.textContent;
    input.value=val;
}
function eight(){
    val=val+eight.textContent;
    input.value=val;
}
function nine(){
    val=val+nine.textContent;
    input.value=val;
}
function zero(){
    val=val+zero.textContent;
    input.value=val;
}
function plus(){
    val=val+plus.textContent;
    input.value=val;
}
function minus(){
    val=val+minus.textContent;
    input.value=val;
}
function multi(){
    val=val+multi.textContent;
    input.value=val;
}
function divide(){
    val=val+divide.textContent;
    input.value=val;
}

function clear(){
    val="";
    input.value=val;
}

function equal(){
    input.value=eval(val);
    val=eval(val);
}

