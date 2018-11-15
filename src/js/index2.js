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
      const inputValue = inputs[input].value;
      const dataValue = inputs[input].dataset.value;
      const div = document.createElement('div');
      div.classList.add('message-block');
      inputs[input].closest('label').appendChild(div);
      console.log(inputs[input].name);

      if (inputs[input].value == '' && inputs[input].name != "sex" ){
        inputs[input].classList.add('invalid');
        inputs[input].classList.remove('valid');
        div.innerHTML = 'Shouldn\'t be an empty';
        removeMessage(inputs[input]);
      } 
      else if(inputs[input].hasAttribute("data-value") && inputs[input].name != "sex"){
        
        if(dataValue == "text" && rules[dataValue].regExp.test(inputValue) == true){
            inputs[input].classList.add("invalid");
            div.innerHTML = rules[dataValue].message;
            removeMessage(inputs[input]);
          }
        else if(dataValue == "bool" && inputs[input].checked == false){
            inputs[input].classList.add("invalid");
            div.innerHTML = rules[dataValue].message;
            removeMessage(inputs[input]);
        }
        else if(rules[dataValue].regExp.test(inputValue) == false && dataValue !== "text"){
            inputs[input].classList.add("invalid");
            div.innerHTML = rules[dataValue].message;
            removeMessage(inputs[input]);
        }
        else{
            inputs[input].classList.remove("invalid");
            inputs[input].classList.add("valid");
            div.innerHTML = "Correct";
            removeMessage(inputs[input]);
        }
      }
    }
  });

  function removeMessage(inp){
    if(inp.closest('.parent').childNodes.length > 1){
      inp.closest('.parent').childNodes[2].remove();
    }
  }
}());
