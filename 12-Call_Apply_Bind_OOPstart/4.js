var elem = document.getElementById('elem');

function func(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}

IvanovHello = func.bind(elem, 'Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
IvanovHello();
PetrovHello = func.bind(elem, 'Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'
PetrovHello();