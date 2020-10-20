/*Calculation Functions*/

let add = function (x, y) {
  return x + y;
}

let subtract = function (x, y) {
  return x - y;
}

let multiply = function (x, y) {
  return x * y;
}

let divide = function (x, y) {
  if (y == 0) {
    return ('Divide by 0');
  }
  return x / y;
}

let operate = function (input1, o, input2) {
  let x = Number(input1);
  let y = Number(input2);
  switch (o) {
    case '+':
      return add(x, y);
    case '-':
      return subtract(x, y);
    case '*':
      return multiply(x, y);
    case '/':
      return divide(x, y);
    default:
      return ('Not an operator');
  }
}





/*VARIABLES*/
/************************************************************************************************************/

let numStart = true;
let negative = false;
let decimal = false;

let currentInput = [];
let inputs = [];

const display = document.querySelector('#displayText');
const numButtons = Array.from(document.querySelectorAll('.num'));
const clear = document.querySelector('.clear');
const back = document.querySelector('.backspace')




/*UPDATE*/
/************************************************************************************************************/


let updateDisplay = function () {
  display.textContent = inputs.concat(currentInput).join('');
}

let clearDisplay = function () {
  currentInput = [];
  inputs = [];
  numStart = true;
  negative = false;
  decimal = false;
  updateDisplay();
}

clear.addEventListener('click', () => {
  clearDisplay();
})

let backspace = function () {
  if (currentInput.length > 0) {
    x = currentInput.pop();
    if (x == '.') {
      decimal = false;
    }
  } else if (inputs.length > 0) {
    currentInput = Array.from(inputs.pop());
    x = currentInput.pop();
    if (x == '.') {
      decimal = false;
    }
  }
  updateDisplay();
}


back.addEventListener('click', () => {
  backspace();
})



// Rounding
let roundDec = function (num, x) {
  let y = Math.pow(10, x);
  num = num * y;
  num = Math.round(num);
  num = num / y;
  return (num)
}


/*NUMBERS*/
/************************************************************************************************************/

let pressNum = function (input) {
  currentInput.push(input);
  numStart = false;
  negative = false;
  updateDisplay();
};

numButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    pressNum(e.target.textContent);
  })
});










/*EVALUATE*/
/************************************************************************************************************/

const evaluate = function (phrase) {

  while (phrase.length > 1) {
    let temp = [operate(phrase[0], phrase[1], phrase[2])];
    if (temp[0] == 'Divide by 0') {
      return (temp[0]);
    }
    phrase = temp.concat(phrase.slice(3));
  }

  return (phrase);
}






/*OPERATORS*/
/************************************************************************************************************/

const operatorButtons = Array.from(document.querySelectorAll('.operator'));

let pressOperator = function (input) {

  if (numStart && input == '-' && !decimal) {
    currentInput.push(input);
    numStart = false;
    negative = true;
  } else if (!decimal && input == '.') {
    currentInput.push(input);
    numStart = true;
    decimal = true;
    updateDisplay();
  } else if (!numStart && !negative) {
    if (input == '=') {
      inputs.push(currentInput.join(''));
      let answer = evaluate(inputs);

      if (answer == 'Divide by 0') {
        clearDisplay();
        display.textContent = answer;
      } else {
        answer = roundDec(answer[0], 3);
        clearDisplay();
        decimal = false;
        if (String(answer).split('').includes('.')) {
          decimal = true;
        }
        numStart = false;
        currentInput.push(answer);
        updateDisplay();
      }


    } else if (input != '.') {
      inputs.push(currentInput.join(''));
      inputs.push(input);
      currentInput = [];
      numStart = true;
      decimal = false;
      updateDisplay();
    }
  }
};

operatorButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    pressOperator(e.target.textContent);
  })
});
