window.onload = function(){
    var range = document.getElementById("range");
    var number = document.getElementById("number");
    var price = document.getElementById("price");
    var comission = document.getElementById("comission");

    function setComissionSize(priceSize){
        var comissionSize = 0;
        
        if (priceSize <= 20) {
            comissionSize = priceSize / 100 * 2;
        } else if (priceSize > 20 && priceSize <= 50){
            comissionSize = priceSize / 100 * 4;
        } else if (priceSize > 50 && priceSize <= 75){
            comissionSize = priceSize / 100 * 6;
        } else if (priceSize > 75 && priceSize <= 100){
            comissionSize = priceSize / 100 * 8;
        };

        return comissionSize;
    };

    range.oninput = function(){
        let value = range.value;
        number.value = value;
        scaleValues(value)
    };

    number.oninput = function(){
        let value = number.value;
        range.value = value;
        scaleValues(value)
    };

    function scaleValues(value){
        price.style.height = value + 'px';
        comission.style.height = setComissionSize(value) + 'px';
        comission.style.bottom = value + 'px';
    };
};





