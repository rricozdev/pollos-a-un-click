// Rutas
const { Router } = require('express');
const {
    getUsersHandler,
    getUserByIdHandler,
    getUserByEmailHandler, 
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
} = require('../handlers/usersHandler');

const usersRouter = Router();

// Get-users
usersRouter.get('/', getUsersHandler);

// Get/users/email - query
usersRouter.get('/email', getUserByEmailHandler); // Cambiado a 'email' y asignado a getUserByEmailHandler

// Get/users/:identification - params
usersRouter.get('/:id', getUserByIdHandler);


// Post -users
usersRouter.post('/', createUserHandler);

// Put
usersRouter.put('/:identification', updateUserHandler);

// Delete
usersRouter.delete('/:identification', deleteUserHandler);

module.exports = usersRouter;

