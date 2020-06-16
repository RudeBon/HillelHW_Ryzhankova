// Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа). При нажатии на Click - counter увеличивается. При перезагрузке страницы counter должен сохраняться.
// Создать кнопку ClearCounters()
// Создать кнопку setCounter(), который запрашивает id блока и устанавливает значение( в типе number ) в counter.

window.onload = function () {
    let counters = [];
    let textareas = [];
    let iterator = 1;

    var clickBtn1 = document.getElementById("click1");
    var textarea1 = document.getElementById('textarea1');
    textareas.push(textarea1);
    let counter1 = 0;
    counters.push(counter1);

    var clickBtn2 = document.getElementById("click2");
    var textarea2 = document.getElementById('textarea2');
    textareas.push(textarea2);
    let counter2 = 0;
    counters.push(counter2);    

    var clearCountersBtn = document.getElementById("clearCounters");
    var setCounterBtn = document.getElementById("setCounter");
    var textarea = document.querySelector('textarea');
    var input = document.querySelector('input');  
    var select = document.querySelector('select');     

    clickBtn1.addEventListener('click', click);
    clickBtn2.addEventListener('click', click);

    clearCountersBtn.addEventListener('click', clearCounters);
    setCounterBtn.addEventListener('click', setCounterFromInput);

    textarea1.value = getCounter(0);
    textarea2.value = getCounter(1);

    createOptions();

    function click() {
        iterator = event.target.getAttribute('data-iterator');
        counter = getCounter(iterator) + 1;
        setCounter(counter, iterator);
    };

    function initialialize() {
        for(i=0; i<counters.length; i++){
            if (!localStorage.getItem('counter' + i)) {
                setCounter(0, i)
            };
        } ;  
    };

    function getCounter(iterator) {
        initialialize();
        return +localStorage.getItem('counter' + iterator);
    };

    function setCounter(counter, iterator) {
        let counterName = 'counter' + iterator;
        localStorage.setItem(counterName, counter);
        textareas[iterator].value = localStorage.getItem(counterName);
    };

    function clearCounters() {
        for(i=0; i<counters.length; i++){
            counter = 0;   
            let counterName = 'counter' + i;
            localStorage.setItem(counterName, counter);     
            setCounter(0, i);
        };
    };

    function setCounterFromInput() {
        iterator = getIdFromSelect();
        if (input.value) {
            counter = +input.value;
            setCounter(counter, iterator);
        };
    };

    function getIdFromSelect(){
        iterator = parseInt(select.value);
        return iterator;
    };
    

    function createOptions(){
        for(i=0; i<textareas.length; i++){
            let HTMLtoInsert = "<option>" + i + " counter</option>";            
            select.insertAdjacentHTML("beforeEnd", HTMLtoInsert);
        };
    };

}