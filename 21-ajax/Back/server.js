var express = require('express')
var fs = require('fs');
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const port = 3003;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.get('/', (req, res) => {

    res.send('Hello World!');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    var login = req.body.login;
    var user = findUserBy(login);

    if (user == null || user == undefined) {
        res.status(401).send('User not found');
    } else if (user.Password == req.body.password) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify({ UserId: user.Id, Login: user.Login }));
    } else {
        res.status(401).send('Password is wrong');
    }
});

app.get('/users/:uid/orders', (req, res) => {
    var userId = req.params.uid;
    var user = getUserBy(userId);

    if (user == null || user == undefined) {
        res.status(404).send('User not found');
    } else {
        var orders = getOrdersBy(userId);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify({ Orders: orders }));
    }
});

function findUserBy(login) {
    var users = getUsersDataFromFile();
    var foundUser = users.find(u => u.Login == login);

    return foundUser;
}

function getUserBy(id) {
    var users = getUsersDataFromFile();
    var user = users.find(u => u.Id == id);

    return user;
}

function getUsersDataFromFile() {
    try {
        var data = fs.readFileSync('Users.json', 'utf8');
        var users = JSON.parse(data).Users;
        return users;
    } catch (e) {
        console.log('Error:', e.stack);
    }
}

function getOrdersBy(userId) {
    try {
        let urlToJson = 'goods/' + userId + '.json'; 
        var data = fs.readFileSync(urlToJson, 'utf8');
        var orders = JSON.parse(data).Orders;

        return orders;
    } catch (e) {
        console.log('Error:', e.stack);
    }
}