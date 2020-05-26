// create a simple express server

const express = require('express');

const app = express();

// to make the server run on port 5000 (if it's not running on process.env.PORT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
