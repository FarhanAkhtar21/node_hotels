// console.log("server file is running");

// ```````````````````All about function`````````````

// function add(a, b) {
//     return a + b;
// }

// var add = function (a, b){
//     return a + b;
// }

// var add = (a, b) => {return a + b};

// var add = (a, b) => a+ b;

// var result = add(2, 15);
// console.log(result);

// (function(){
//     console.log("bokachoda is added")
// })();

// ``````````````````` All about Callback function````````````````

// function callback() {
//     console.log("now adding is sucessful complete");
// }

// const add = function (a, b, callback){
//     var result = a + b;
//     console.log("result =", result);  // main function ends here
//     callback();
// }

// add(4,7, callback)





// const add = function (a, b, randa){
//     var result = a + b;
//     console.log("result =", result);  // main function ends here
//     randa();
// }


// add(3, 7, function(){
//     console.log('add completed')
// });


// add(2, 4, () => console.log("add completed"));



// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);


// fs.appendFile('greeting.txt', 'Hi' + user.username + '!\n', ()=>{  console.log('file is created');});

// console.log(os);
// console.log(fs)



// const notes = require("./notes.js");
// console.log("server file is available");
// var _ = require('lodash');

// var age = notes.age;

// var result = notes.addNumber(age + 18, 10);


// console.log(age)
// console.log('result is now ' + result)


// var data = ["person", "person", 1, 2, 1, 2, "name", "age", '2'];
// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString(true));

































// const jsonString = '{"name": "john", "age": "30", "city": "New york"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);


// const objectToConvert = {
//     name: "Alice",
//     age: 25
// };

// const json = JSON.stringify(objectToConvert);
// console.log(json)
// console.log(typeof json)











// ````````````````````````````````Express Js`````````````````````````

const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000;


const MenuItem = require('./models/MenuItem')

app.get('/', function (req, res) {
    res.send('Welcome to our hotels')
})





// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemsRoutes = require('./routes/menuItemsRoutes');




// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemsRoutes);




app.listen(PORT, () => {
    console.log("listening on port 3000");
});
