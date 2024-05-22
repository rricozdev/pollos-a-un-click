const { Router } = require('express');
const { loginUserHandler } = require('../handlers/authHandler');

const authRouter = Router();

// Ruta de login
authRouter.post('/', loginUserHandler);

module.exports = authRouter;
