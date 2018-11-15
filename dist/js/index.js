(function() {
    let form = document.querySelector(".my-form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        
        let rules = {
            text: {
                regExp : /'/ ,
                message : "You can't use ' and \" symbols" ,
            },
            date: {
                regExp : /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
                message: "Date should be a mm-dd-yyyy format",
            },
            email: {
                regExp: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Should be an email",
            },
            password: {
                regExp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                message: "Shoud be more than 8 symbols and contain uppercase and number"
            },

            bool: {
                regExp: /true/,
                message: "Shoud be checked"
            }
        }
    
    let inputs = document.getElementsByTagName("input");
    // console.log(JSON.stringify(inputs[input].keys()));
    for(input in inputs){
        console.log(JSON.stringify(inputs[input].name));
        //console.log(inputs[input].value);
        let inputValue = inputs[input].value;
        //console.log(inputValue);
        let dataValue = inputs[input].dataset.value;
        if(inputs[input].value == ""){
            console.log("Shouldn't be an empty");
        }
        else{
            if(inputs[input].hasAttribute("data-value") && dataValue !== "submit"){
                if(dataValue == "text" && rules[dataValue].regExp.test(toString(inputValue)) == true){
                    console.log();
                }
                else if(rules[dataValue].regExp.test(toString(inputValue)) == false && dataValue !== "text"){
                    console.log(rules[dataValue].message);
                }
                else{
                    console.log("CORRECT!!!");
                }
                //console.log(JSON.stringify(inputs[input].dataset.value));
            }
        }
    }
});
})();