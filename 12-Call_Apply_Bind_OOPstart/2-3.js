var elem = document.getElementById('elem');

function func(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}

func.call(elem, "Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'   


// func.apply(elem, ["Иванов", "Иван"]);   // 3rd task
 
