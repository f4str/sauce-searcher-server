const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server running at port: ${port}`);
});

module.exports = app;