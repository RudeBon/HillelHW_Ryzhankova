var express = require('express'); 
var fs = require('fs');
var app = express(); 
var bodyParser = require('body-parser');

//Настройки
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

const port = 3000;

app.listen(port, function () { 
    console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ---------------------------

// const users = require('./users.json');
function jsonReader(filePath, cb){
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
};

jsonReader('./customer.json', (err, users) => {
    if (err) {
        console.log(err)
        return
    }
    for(i = 0; i < users.length; i++){
        console.log(users[i].login)
    }    
});

jsonWriter('./customer.json', usersString () => {
    
})
// fs.readFile('./users.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log("File read failed:", err)
//         return
//     }
//     try {
//         const users = JSON.parse(jsonString)
//         console.log("The users list", users[0].name) // => "Customer address is: Infinity Loop Drive"
//     } catch (err) {
//         console.log('Error parsing JSON string:', err)
//         }
// })

app.post('/set-user-info', function (req, res) {
    const {login, password, secretKey} = req.body; // req - обьект запроса, res -- обьект ответа
     console.log(login, password, secretKey);
     console.log(req.body, 'req.body');
    //  req.body.id++;
     
     res.send(req.body);
   });
   
var Valera = { login: 'Valera', password: '123', secretKey: '@gh5' };

users.push(user);

const usersString = JSON.stringify(users);

function jsonWriter(filePath, cb) {

    fs.writeFile(filePath, jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
};


function jsonReader(filePath, cb){
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
};