const { Router } = require('express');
const {getTenderosByIdHandler} = require('../handlers/tenderosHandler')

const tenderosRouter = Router();

// Enrutador para obtener los tenderos por id
tenderosRouter.get('/:id', getTenderosByIdHandler)

module.exports = tenderosRouter;