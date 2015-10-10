var fs = require("fs");
var file = "test.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
db.serialize(function(){
	if(!exists) {
		db.run("Create table demo (data TEXT)");
	}
	var stmt = db.prepare("Insert into demo values(?)");
	var a = 23;
	stmt.run("Data "+a);
	stmt.finalize();
	db.each("Select rowId as id, data from demo",function(err,row){
		console.log(row.id+": "+row.data);
	});
});
db.close();