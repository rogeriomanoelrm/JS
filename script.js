let valueNumber1, valueNumber2;
let operationSelected;
let numberOfClicks = 0;



function updateDisplay(buttonNumber) {
    // const display = document.getElementById("display");
    // const display  = document.getElementsByTagName("div")[0];
    const display = document.querySelector("#display");
    display.innerHTML += buttonNumber;

    if(numberOfClicks===0){
        display.innerHTML = buttonNumber;
        
    } else{
        display.innerHTML += buttonNumber
    }

}

plusButton.addEventListener("click", sum);
function sum() {
    valueNumber1 = Number.parseInt(display.innerHTML);
    display.innerHTML = 0;
    operationSelected = "sum";

}
 
minusButton.addEventListener("click", substraction);
function substraction(){
    valueNumber1 = Number.parseInt(display.innerText);
    display.innerHTML = 0;
    operationSelected = "substraction";
}

timesButton.addEventListener("click", multiplication);
function multiplication (){
    valueNumber1 = Number.parseInt(display.innerText);
    display.innerHTML = 0;
    operationSelected = "multiplication"
}

dividedButton.addEventListener("click", division);
function division(){
    valueNumber1 = Number.parseInt(display.innerText)
    display.innerHTML = 0;
    operationSelected = "division";
}

resultButton.addEventListener("click", result);
function result() {
    valueNumber2 = Number.parseInt(display.innerText);

if(operationSelected === "sum"){
    display.innerHTML = valueNumber1 +  valueNumber2;
} else if(operationSelected === "substraction"){
    display.innerHTML = valueNumber1 - valueNumber2;
} else if(operationSelected === "multiplication"){
    display.innerHTML = valueNumber1 * valueNumber2;
} else if(operationSelected === "division"){
    display.innerHTML = valueNumber1 / valueNumber2;
}
else{
    console.log("wrong");

}
    

}

clearButton.addEventListener("click", deleteDisplay);
function deleteDisplay(){
    display.innerHTML = 0;
    operationSelected = null;
    valueNumber1 = null;
    valueNumber2 = null;
}

