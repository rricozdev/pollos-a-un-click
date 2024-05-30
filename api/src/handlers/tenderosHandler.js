const { getTenderosByid } = require('../controllers/tenderosController')

const getTenderosByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const tendero = await getTenderosByid(id)

        res.status(200).json(tendero);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {
    getTenderosByIdHandler
}