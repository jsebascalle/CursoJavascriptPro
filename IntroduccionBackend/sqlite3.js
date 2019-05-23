const sqlite3 = require("sqlite3");

let db = new sqlite3.Database("db-sqlite3");
//let db = sqlite3.Database(":memory");//para pruebas anonimas - carga en ram
db.run("CREATE TABLE task(id int AUTO_INCREMENT, description varchar(255))");

db.close();
