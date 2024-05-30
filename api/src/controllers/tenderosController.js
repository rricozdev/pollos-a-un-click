const { User } = require('../db');


const getTenderosByid = async (id) => {
    const tenderoDb = await User.findOne({
        where: { id },
        attributes: { exclude: ['password', 'identification', 'createdAt', 'updatedAt'] }
    });

    if(!tenderoDb) {
        throw new Error(`No se encontró un tendero con la identificación: ${id} -- mensaje desde el controller`);
    }
    return tenderoDb;

}

module.exports = {
    getTenderosByid
}