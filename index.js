// create a simple express server
const express = require('express');

//Deal with file paths
const path = require('path');

//import middleware
const logger = require('./middleware/logger');

const app = express();

// body parser middleware
app.use(express.json());
// handle url encoded data
app.use(express.urlencoded({ extended: false }));

//initialize middleware - every time I make a request the middleware will run
/* app.use(logger); */

/* //to create a route we want to use app - the type of request went to handle is get (when you go to a web page)
app.get('/', (req, res) => {
	//send HTML file
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

// Set static folder - (is setting the public folder as my static folder )
app.use(express.static(path.join(__dirname, 'public')));

// members API routes
app.use('/api/members', require('./routes/api/members'));

// to make the server run on port 5000 (if it's not running on process.env.PORT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// start server with "node index" in terminal ...Server started on port 5000
