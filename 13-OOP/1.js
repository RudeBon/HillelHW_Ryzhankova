// Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak. 
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. 
// Если - да, сделать математическое действие znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод 
// input() класса SuperMath. Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. 
//  При вводе znak нужно сделать проверку корректности ввода на возможные математические действия

// p = new SuperMath(); 
// p.check(obj); // --> no p.input() -> 3 prompt -> считает

class SuperMath {
    constructor(){}

    input(obj) {
        obj.x = prompt('Enter the value for the expression', '');
        obj.y = prompt('Enter the second value for the expression', '');   
        while(true){
            obj.znak = prompt('Enter the expression symbol to perform', '');
            if ((obj.znak == '+') || (obj.znak == '^') || (obj.znak == '-') || (obj.znak == '/') || (obj.znak == '%') || (obj.znak == '*')){
                break
            }
            alert("Acceptable expression symbols: + - / * %. Please choose one.");
        }
    }

    doMath(x, y, znak){
        if (znak == '^'){
                var rez = Math.pow(x, y);            
            } else{
                var math = x + znak + y;    
                var rez = eval(math);            
            }
        // return rez;
        console.log(x + " " + znak + " " + y + " = " + rez);
    }

    check(obj) {
        var answer  = confirm("Do you want to perform expression " + obj.x + ' ' + obj.znak + ' ' + obj.y + '?');
        if (answer){
            this.doMath(obj.x, obj.y, obj.znak);
        } else {
            this.input(obj);
            this.check(obj);
        }
    }    

    
};

first = new SuperMath;

let A = {
    x : 2,
    y : 3,
    znak : "*",
};

first.check(A);
