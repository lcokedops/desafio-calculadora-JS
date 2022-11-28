const inputNumber1 = document.querySelector("#number1");
const inputNumber2 = document.querySelector("#number2");
const resultBox = document.querySelector("#result-box");

const btnPlus = document.querySelector("#btn-plus");
btnPlus.addEventListener('click', handleBtnPlusClick);

const btnTimes = document.querySelector("#btn-times");
btnTimes.addEventListener('click', handleBtnTimesClick);

const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener('click', handleBtnClearClick);

//Evento click do botão somar
function handleBtnPlusClick() {
    if (isNumber(inputNumber1.value) && (isNumber(inputNumber2.value))) {
        validateInputNumbers();
        resultBox.innerHTML = Number(inputNumber1.value) + Number(inputNumber2.value);;
    } else {
        validateInputNumbers();
        resultBox.innerHTML = 0;
    }
};

//Evento click do botão multiplicar
function handleBtnTimesClick() {
    if (isNumber(inputNumber1.value) && (isNumber(inputNumber2.value))) {
        validateInputNumbers();
        resultBox.innerHTML = Number(inputNumber1.value) * Number(inputNumber2.value);;
    } else {
        validateInputNumbers();
        resultBox.innerHTML = 0;
    }
}

//Evento click do botão limpar
function handleBtnClearClick() {
    //Limpar o primeiro campo
    inputNumber1.value = "";
    inputNumber1.classList.remove("input-error");

    //Limpar o segundo campo
    inputNumber2.value = "";
    inputNumber2.classList.remove("input-error");

    //Zerar o valor do resultado
    resultBox.innerHTML = 0;
}

//Validar se é um número
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//Validar números no input
function validateInputNumbers(){
    //Validar primeiro campo
    if (isNumber(inputNumber1.value)) {
        inputNumber1.classList.remove("input-error");
    } else {
        inputNumber1.classList.add("input-error");
    }

    //Validar segundo campo
    if (isNumber(inputNumber2.value)) {
        inputNumber2.classList.remove("input-error");
    } else {
        inputNumber2.classList.add("input-error");
    }
}