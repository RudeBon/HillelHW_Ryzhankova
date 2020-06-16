var elem = document.getElementById('elem');

function func() {
	alert(this.value);
}

func.call(elem); //тут должно вывести value инпута