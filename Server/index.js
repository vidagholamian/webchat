

var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('assets'))

var list_messages = {
    msg: [ ],
    name: [ ]
};

var list_userID = [];
   
var number = 1;


// generating new id for every user
function getID() {
    var temp = number;
    number++;
    return (temp + 1000);
}

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'));
});



app.post('/id', function (req, res) {
    console.log("send id");
    var userID;
   // for (i = 0; i < list_userID.ID.length; i++) {
        userID = JSON.stringify({ list_userID });
        res.json(userID);
        console.log(userID);
   // }

});


app.post('/add', function (req, res) {
    console.log("it is ok");
    var id = getID();
     console.log(id);
     res.json({ "userID": id });
     list_userID[list_userID.length] = id;
     console.log(list_userID);
   
});


app.listen(8080);

var server = require('ws').Server;
var wss = new server({ port: 5001 });
// creating server on port 5001 localhost 

wss.on('connection', function (ws) {

    //on message event 
    console.log(list_messages.msg.length);
    for (i = 0; i < list_messages.msg.length; i++) {
        var mesage = list_messages.msg[i];

        var data = JSON.stringify({
            name: list_messages.name[i],
            message: list_messages.msg[i]
        });

        console.log(data);
        ws.send(data);
    }
    
    
    ws.on('message', (data) => {
        //console.log(data);
        var jsonObject = JSON.parse(data);
        console.log(data);
         var username = jsonObject.name;
         var message = jsonObject.message;
         console.log("username");
        //add msg and username to messageList
         list_messages.msg[list_messages.msg.length]= message;
         list_messages.name[list_messages.name.length] = username;
         console.log(list_messages);

        //broadcast data to all clients 
        wss.clients.forEach(function e(client) {
            client.send(data);
        })
    });
    
    ws.on('close', function () {
        console.log('Connection terminated..Closing Client');
     
    });
})
console.log("ok!");
