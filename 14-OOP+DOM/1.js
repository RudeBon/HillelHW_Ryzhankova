window.onload = function(){
    var inputs = document.getElementsByClassName('input');
    var textarea = document.getElementById('here');

    function getInputValue(){
        let inputsValue = [];
        for(i=0; i < inputs.length; i++){
            inputsValue.push(inputs[i].value);
        };   
        return combineInputs(inputsValue);
    };

    function combineInputs(valuesArray){
        var textToPrint = valuesArray.join(', ');
        return textToPrint;
    };

    function writeMessage(){
        valueToReturn = getInputValue();
        textarea.value = valueToReturn;
    };

    setInterval(writeMessage, 5000); 
};
