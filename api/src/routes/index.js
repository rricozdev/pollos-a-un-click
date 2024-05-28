const { Router } = require('express');
const usersRouter = require('./usersRouter');
const authRouter = require('./authRouter');
const pedidosRouter = require('./pedidosRouter');

const mainRouter = Router();


// mainRouter.use('/', (req, res) => {
//     console.log('Estamos en landing!');
//     res.status(200).send('Estamos en LandingPage!!!')
// })

// 4 rutas

// Usuarios
mainRouter.use('/users', usersRouter );

// Autenticación 
mainRouter.use('/login', authRouter); 

// Pedidos
mainRouter.use('/pedidos', pedidosRouter );

// notificaciones
mainRouter.use('/notificaciones', (req, res) => {
    console.log('Estamos en notificaciones');
    res.status(200).send('Estamos en Notificaciones!!!')
} );






module.exports = mainRouter;