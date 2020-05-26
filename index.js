// create a simple express server
const express = require('express');

//Deal with file paths
const path = require('path');

//import members
const members = require('./Members');

//import middleware
const logger = require('./middleware/logger');

const app = express();

//initialize middleware - every time I make a request the middleware will run
/* app.use(logger); */

//create a route - gets all members
app.get('/api/members', (req, res) => {
	res.json(members);
}),
	/* //to create a route we want to use app - the type of request went to handle is get (when you go to a web page)
app.get('/', (req, res) => {
	//send HTML file
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

	// Set static folder - (is setting the public folder as my static folder )
	app.use(express.static(path.join(__dirname, 'public')));

// to make the server run on port 5000 (if it's not running on process.env.PORT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// start server with "node index" in terminal ...Server started on port 5000
