
class Calculator {
    constructor(previousOperandElement, currentOperandElement){
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
        this.updateDisplay();
    }

    clear() {
    }

    delete() {

    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
    }

    compute() {
    }

    updateDisplay() {
        this.previousOperandElement.innerText = this.previousOperand;
        this.currentOperandElement.innerText = this.currentOperand;
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandElement = document.querySelector("[data-previous-operand]");
const currentOperandElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandElement, currentOperandElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});