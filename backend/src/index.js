const express = require('express');
const morgan = require('morgan');

const app = express();

const taskRoutes = require('./routes/tasks.routes');

app.use(morgan('dev'));

app.use(taskRoutes);

app.listen(4000);
console.log('Listening in port 4000');
