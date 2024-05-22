const { Router } = require('express');
const {
    getUsersHandler,
    getUserByIdHandler, 
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
} = require('../handlers/usersHandler');

const usersRouter = Router();

// Get-users
usersRouter.get('/', getUsersHandler);

// Get/users/{:id}
usersRouter.get('/:id', getUserByIdHandler);

// Post -users
usersRouter.post('/', createUserHandler);

// Put
usersRouter.put('/:id', updateUserHandler)

// Delete
usersRouter.delete('/:id',  deleteUserHandler);

module.exports = usersRouter;