var express = require('express'); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require('fs');// fs -- обтект который дает возможность читать файлы(например json)
var app = express(); 
var bodyParser = require('body-parser');// 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs

//Настройки
//(https://overcoder.net/q/7302/%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-body-parser-%D1%81-express)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const port = 3005;

app.listen(port, function () { 
    console.log(`Example app listening on port http://localhost:${port}/`);
});

app.get('/', function (req, res) { 
      res.status(200); 
      res.send("This is Home page"); 
});

app.get('/all-users', function(request, responce) {   
  let data = JSON.stringify({content: 'HEllo world'});
  responce.send(data);
});

app.get('/user/:id', function(req, res) {
  fs.readFile('data.json', 'utf-8', function(err, data) { // читает файл json по относительному адресу
          res
          .status(200)
          .send(data); // data - прочитаный json file который возвращаем как результат работы запроса
  });
});


app.post('/set-user-info', function(req, res) {
    var addingUser = req.body;
    var existingUser = getUserBy(addingUser.login, addingUser.secretKey);
    if (existingUser != null || existingUser != undefined) {
        res.status(301).send("Пользователь уже существует");
    } else {
        addUserToFile(addingUser);
        res.status(200).send(`Пользователь ${addingUser.login} создан`);
    }
  });

function getUserBy(login, secretKey) {
    var usersData = getUsersFromFile();
    return usersData
        .find(u => u.login == login && u.secretKey == secretKey);
}

function getUsersFromFile() {
    try {
        var usersArr = fs.readFileSync('users.json', 'utf8');
        return JSON.parse(usersArr);
    } catch (e) {
        console.log('Error:', e.stack);
    }
}

function addUserToFile(user) {
    try {
        var usersArr = JSON.parse(fs.readFileSync('users.json', 'utf8'));
        usersArr.push(user);
        fs.writeFileSync('users.json', JSON.stringify(usersArr));
    } catch (e) {
        console.log('Error:', e.stack);
    }

}
