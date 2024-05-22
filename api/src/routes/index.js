const { Router } = require('express');
const usersRouter = require('./usersRouter');

const mainRouter = Router();


// mainRouter.use('/', (req, res) => {
//     console.log('Estamos en landing!');
//     res.status(200).send('Estamos en LandingPage!!!')
// })

// 4 rutas
// Usuarios

mainRouter.use('/users', usersRouter );

// Produccion
mainRouter.use('/productions', (req, res) => {
    console.log('Estamos en productions');
    res.status(200).send('Estamos en PRODUCTIONS!!!')
} );


// Pedidos
mainRouter.use('/pedidos', (req, res) => {
    console.log('Estamos en pedidos');
    res.status(200).send('Estamos en PEDIDOS!!!')
} );

// Mensajes
mainRouter.use('/mensajes', (req, res) => {
    console.log('Estamos en mensajes');
    res.status(200).send('Estamos en mensajes!!!')
} );




module.exports = mainRouter;