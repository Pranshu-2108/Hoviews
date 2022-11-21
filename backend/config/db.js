import mysql from 'mysql'

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database:"hms",
multipleStatements: true 
})

export default db