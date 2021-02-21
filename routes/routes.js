var router = require('express').Router();
var peliculasController=require('../controllers/peliculasController');


/**
 * @swagger
 * /peliculas:
 *   get:
 *     summary: Retrieve a list of JSON Peliculas.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: Lista de peliculas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     
 */
router.get('/peliculas', peliculasController.getAllHome); 

/**
 * @swagger
 * /categoria/{cat}:
 *   get:
 *     summary: listado de peliculas por categoria
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: nombre de la categoria
 */
router.get('/categoria/:cat', peliculasController.getByCategory); 
module.exports = router;

