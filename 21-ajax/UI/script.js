function login(form) {
    var un = form.Username.value;
    var pw = form.Password.value;
    var params = {login: un, password: pw};
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("post", "http://localhost:3003/Login", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xmlhttp.send(JSON.stringify(params)); 
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            loginResults(JSON.parse(xmlhttp.responseText), form);
        }
    }
}

function getUserOrders() {
    var userId = localStorage.getItem('UserId');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", `http://localhost:3003/users/${userId}/orders`, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xmlhttp.send(); 
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            printOrders(JSON.parse(xmlhttp.responseText));
        }
    }
}

window.addEventListener("load", function () {
    var loginForm = document.getElementById("LoginForm");    
    var getOrderButton = document.getElementById("GetOrderButton");
    window.addEventListener("submit", function () {
        login(loginForm);
    });

    getOrderButton.addEventListener("click", function () {
        getUserOrders();
    });

});

function loginResults(responseJson, form) {
    localStorage.setItem('UserId', responseJson.UserId);    
    showUserInfo(responseJson.Login, form);
}

function printOrders(orders) {
    var oredersDiv = document.getElementById("Orders");
    oredersDiv.innerHTML = JSON.stringify(orders);
    oredersDiv.style.display = "block";
}

function showUserInfo(login, form) {
    var loggedIn = document.getElementById("LoggedIn");
    loggedIn.innerHTML = "Logged in as " + login + ". Hello!";
    loggedIn.style.display = "block";

    form.style.display = "none";

    var getOrderButton = document.getElementById("GetOrderButton");
    getOrderButton.style.display = "block";
}