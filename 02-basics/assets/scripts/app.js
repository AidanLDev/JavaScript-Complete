const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  return `${resultBeforeCalc} ${operator} ${calcNumber}`;
}

function writeToLog(operation, prevResult, enteredNumber, currentResult) {
  const logEntry = {
    operation: operation,
    prevNum: prevResult,
    enteredNumber: enteredNumber,
    currentResult: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculte(operation) {
  let operator;
  const enteredNumber = getUserInput();
  const resultBeforeCalc = currentResult;

  if (operation === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operator = '-';
  } else if (operation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
  } else {
    currentResult /= enteredNumber;
    operator = '/';
  }

  outputResult(
    currentResult,
    createAndWriteOutput(operator, resultBeforeCalc, enteredNumber)
  );
  writeToLog(operator, resultBeforeCalc, enteredNumber, currentResult);
}

function add() {
  calculte('ADD');
}

function subtract() {
  calculte('SUBTRACT');
}

function multiply() {
  calculte('MULTIPLY');
}

function divide() {
  calculte('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
