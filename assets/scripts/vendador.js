const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const myumber= document.getElementById('btn-1,2,3,4,5,6,7,8,9,0');


const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput= document.getElementById('current-calculation-');


function outputResult(result,text){
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}
outputResult(currentResult);

