// require('dotenv').config();
// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const mainRouter = require('./routes');


// const app = express();

// app.use(express.json());

// app.use(morgan('dev'));
// app.use(cors());
// app.use(mainRouter);


// module.exports = app;

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mainRouter = require('./routes');

const app = express();

// Middleware para configurar los encabezados de respuesta HTTP
app.use((req, res, next) => {
  // Agrega la directiva Permissions-Policy con las características permitidas
  res.setHeader('Permissions-Policy', 'ch-ua-form-factor');
  // Llama a next() para pasar la solicitud al siguiente middleware
  next();
});

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(mainRouter);

module.exports = app;
