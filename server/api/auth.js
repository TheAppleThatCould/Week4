// var fs = require('fs')

let arrayOfUsers = [
    {userName: "Bob", birthDate: "11/04/1999", age: 20, email: "email1@gmail.com", password: "111", valid: false},
    {userName: "John", birthDate: "1/05/1996", age: 22, email: "email2@gmail.com", password: "222", valid: false},
    {userName: "Dez", birthDate: "15/06/1998", age: 26, email: "email3@gmail.com", password: "333", valid: false}
]

module.exports = function(req, res){
    console.log("Login request is: ",req)

    let userName = req.body.userName; 
    let password = req.body.password;

    let userDetails = {valid: false};
    console.log(userName, password);

    arrayOfUsers.map(el => {
        if(el.userName == userName || el.email == userName && el.password == password){
            userDetails = el;
            userDetails.valid = true;
        }
    })


    res.send(userDetails);
};



