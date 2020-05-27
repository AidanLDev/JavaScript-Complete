const defaultResult = 0;
let currentResult = defaultResult;

currentResult = currentResult + 10;

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  return `${resultBeforeCalc} ${operator} ${calcNumber}`;
}

function add() {
  const enteredNumber = getUserInput();
  const resultBeforeCalc = currentResult;
  currentResult = currentResult + enteredNumber;
  outputResult(
    currentResult,
    createAndWriteOutput('+', resultBeforeCalc, enteredNumber)
  );
}

function subtract() {
  const enteredNumber = getUserInput();
  const resultBeforeCalc = currentResult;
  currentResult = currentResult - enteredNumber;
  outputResult(
    currentResult,
    createAndWriteOutput('-', resultBeforeCalc, enteredNumber)
  );
}

function multiply() {
  const enteredNumber = getUserInput();
  const resultBeforeCalc = currentResult;
  currentResult = currentResult * enteredNumber;
  outputResult(
    currentResult,
    createAndWriteOutput('*', resultBeforeCalc, enteredNumber)
  );
}

function divide() {
  const enteredNumber = getUserInput();
  const resultBeforeCalc = currentResult;
  currentResult = currentResult / enteredNumber;
  outputResult(
    currentResult,
    createAndWriteOutput('/', resultBeforeCalc, enteredNumber)
  );
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
