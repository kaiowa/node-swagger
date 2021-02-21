

require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const router = require('./routes/routes');
const helmet = require('helmet');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors=require('cors');
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(helmet());
app.use(cors())

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for Peliculas',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 
app.use('/', router)
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

