const express = require('express');
const morgan = require('morgan');

const app = express();

const taskRoutes = require('./routes/tasks.routes');

app.use(morgan('dev'));
app.use(express.json());

app.use(taskRoutes);

//Handle error response
app.use((err, req, res, next) => {
	return res.json({ message: 'Error: ' + err.message });
});

app.listen(4000);
console.log('Listening in port 4000');
