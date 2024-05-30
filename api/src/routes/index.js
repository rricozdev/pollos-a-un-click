const { Router } = require('express');
const usersRouter = require('./usersRouter');
const authRouter = require('./authRouter');
const pedidosRouter = require('./pedidosRouter');
const productoresRouter = require('./productoresRouter');
const tenderosRouter = require('./tenderosRouter');

const mainRouter = Router();


// Usuarios
mainRouter.use('/users', usersRouter );

// Autenticación 
mainRouter.use('/login', authRouter); 

// Pedidos
mainRouter.use('/pedidos', pedidosRouter );

// Productores
mainRouter.use('/productores', productoresRouter)

// Tenderos
mainRouter.use('/tenderos', tenderosRouter)

// notificaciones
mainRouter.use('/notificaciones', (req, res) => {
    console.log('Estamos en notificaciones');
    res.status(200).send('Estamos en Notificaciones!!!')
} );



module.exports = mainRouter;