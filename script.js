const screenDisplay = document.querySelector(".screen");


//Defining number buttons here
numButtons = document.querySelectorAll(".calcButtonNum");
numButtons.forEach(addListener);

function addListener (button) {
    button.addEventListener("click", pressednum);

}

//Defining and assigning Special Calculator Buttons Here
clearButton = document.querySelector("#reset");
clearButton.addEventListener("click", clear)

deleteButton = document.querySelector("#del");
deleteButton.addEventListener("click", deleteC)

plusButton = document.querySelector("#plus");
plusButton.addEventListener("click", plus);

minusButton = document.querySelector("#minus");
minusButton.addEventListener("click", minus);

multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", multiply);

divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", divide);

//Function banks here
function pressednum (evt) {
    let value = evt.currentTarget.textContent;
    console.log(value);
    if (calculator.display == "0"){
        
        calculator.display = value;
    }
    else {
        calculator.display += value;
    }
    screenDisplay.textContent = calculator.display;
}

function clear () {
    calculator.display = 0;
    screenDisplay.textContent = calculator.display;
}

function deleteC () {
    calculator.deleteChar();
    screenDisplay.textContent = calculator.display;
    if (calculator.display == ""){
        calculator.display = "0";
        screenDisplay.textContent = calculator.display;
    }
}

function plus () {
    let lastChar = calculator.display[calculator.display.length-1];
    if ( lastChar == "+" || lastChar == "-" || lastChar == "x" || lastChar == "/"){
        calculator.deleteChar();
    }
    calculator.display += "+";
    screenDisplay.textContent = calculator.display;
}

function minus () {
    calculator.display += "-";
    screenDisplay.textContent = calculator.display;
}

function multiply () {
    calculator.display += "x";
    screenDisplay.textContent = calculator.display;
}

function divide () {
    calculator.display += "/";
    screenDisplay.textContent = calculator.display;
}

// Defining Calculator Object here
let calculator = {
    display:"0",
    numbers : [],
    operations : [],
    result : "",
    deleteChar : function (){
        this.display = this.display.slice(0,-1);
    }
}
screenDisplay.textContent = calculator.display;
