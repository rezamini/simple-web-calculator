
class Calculator {
    constructor(previousOperandElement, currentOperandElement){
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
        this.updateDisplay();
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand.toString() ;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const previous = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if(isNaN(previous) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = previous + current;
                break;
            case '-':
                computation = previous - current;
                break;
            case '*':
                computation = previous * current;
                break;
            case '÷':
                computation = previous / current;
                break;
            default:
                break;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand);
        this.previousOperandElement.innerText = this.getDisplayNumber(this.previousOperand);
    }

    getDisplayNumber(number){
        const stringNumber = number.toString().split('.');
        let integerDigits = parseFloat(stringNumber[0]);
        let decimalDigits = stringNumber[1];
        let finalNumber ='';
        
        if(!isNaN(integerDigits)){
            finalNumber = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }

        if(decimalDigits != null){
            finalNumber = `${finalNumber}.${decimalDigits}`;
        }

        return finalNumber;
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

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})