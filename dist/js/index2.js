(function () {
  const form = document.querySelector('.my-form');
  const inputs = form.querySelectorAll('.input');
  const rules = {
    text: {
      regExp: /['"]/,
      message: "You can't use ' and \" symbols",
    },
    date: {
      regExp: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
      message: 'Date should be a yyyy-mm-dd format',
    },
    email: {
      regExp: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      message: 'Should be an email',
    },
    password: {
      regExp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      message: 'Shoud be more than 8 symbols and contain uppercase and number',
    },
    bool: {
      regExp: /[a-z]/,
      message: 'Shoud be checked',
    },
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    for (input in inputs) {
      const elem = inputs[input];
      const inputValue =  elem.value;
      const dataValue = elem.dataset.value;
      const div = document.createElement('div');
      div.classList.add('message-block');
      elem.closest('label').appendChild(div);

      if (elem.value == '' && elem.name != "sex" ){
        removeMessage(elem);
        emptyCorrect(elem, div, 'Shouldn\'t be an empty', 'invalid');
      } 
      else if(elem.hasAttribute("data-value") && elem.name != "sex"){
        if(dataValue == "text" && rules[dataValue].regExp.test(inputValue) == true){
            errorMessage(elem);
            removeMessage(elem);
          }
        else if(dataValue == "bool" && elem.checked == false){
            errorMessage(elem);
            removeMessage(elem);
        }
        else if(rules[dataValue].regExp.test(inputValue) == false && dataValue !== "text"){
            errorMessage(elem);
            removeMessage(elem);
        }
        else{
          emptyCorrect(elem, div, 'Correct!', 'valid')
          removeMessage(elem);
        }
      }
    }
  });

  function emptyCorrect(inp, div, mes, valClass){
    inp.classList.remove('invalid');
    inp.classList.add(valClass);
    div.innerHTML = mes;
  }

  function errorMessage(inp){
    inp.classList.remove("invalid");
    div.innerHTML = rules[dataValue].message;
  } 

  function removeMessage(inp){
    if(inp.closest('.parent').childNodes.length > 1){
      inp.closest('.parent').childNodes[2].remove();
    }
  }
}());
