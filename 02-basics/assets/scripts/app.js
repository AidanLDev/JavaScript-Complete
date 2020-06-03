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

function add() {
  const enteredNumber = getUserInput();
  const resultBeforeCalc = currentResult;
  currentResult += enteredNumber;
  outputResult(
    currentResult,
    createAndWriteOutput('+', resultBeforeCalc, enteredNumber)
  );
  writeToLog('+', resultBeforeCalc, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const resultBeforeCalc = currentResult;
  currentResult -= enteredNumber;
  outputResult(
    currentResult,
    createAndWriteOutput('-', resultBeforeCalc, enteredNumber)
  );
  writeToLog('-', resultBeforeCalc, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const resultBeforeCalc = currentResult;
  currentResult *= enteredNumber;
  outputResult(
    currentResult,
    createAndWriteOutput('*', resultBeforeCalc, enteredNumber)
  );
  writeToLog('*', resultBeforeCalc, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const resultBeforeCalc = currentResult;
  currentResult /= enteredNumber;
  outputResult(
    currentResult,
    createAndWriteOutput('/', resultBeforeCalc, enteredNumber)
  );
  writeToLog('/', resultBeforeCalc, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
