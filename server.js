var port = process.argv[2] || process.env.PORT || 8080,
	express = require('express'),
	app = express(),
	join = require('path').join,
	Gun = require('gun'),
	gun = new Gun();

gun.wsp(app);

app.use(express.static(__dirname));

app.listen(port, function () {
	console.log('Server started on port ' + port);
});