var mysql = require("mysql");
var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:""
});

con.connect(function(err){
	if(err) {
		console.log('Error connecting');
		return;
	}
	console.log('Connection established');
});

con.end(function(err) {

});