const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Koushik@123'
});

//Inserting new data
let  q = "INSERT INTO user(id, username, email, password) VALUES ?";
let users = [
    ["123b", "123_newuserb","abccb@example.com", "abcb"],
    ["123c", "123_newuserc","abccc@example.com", "abcc"]
];

try{
    connection.query(q, [users], (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
    })
} 
catch(err) {
    console.log(err);
}

connection.end();

let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}
