const { User } = require('../db');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');


// Get/users?name='Yuranis'
const searchUserByName = async (name) => {

    const lowercaseName = name.toLowerCase(); // procesamos el nombre a minúsculas.

    const dBUsers = await User.findAll({
        where: {
            name: {
                [Op.iLike]: `${lowercaseName}%`
            }
        }
    });

    console.log(dBUsers)

    return dBUsers.length !== 0 ? dBUsers : `No se encontró un usuario con el nombre ${name}`
};

// Get/users/{:id} ---> http://localhost:3001/users/79731174-92ac-42bf-b17d-68de307dafff
const getUserById = async (id) => {

    const user = await User.findOne({
        where: { id }
    });

    if (!user) {
        throw new Error(`No se encontró un usuario con el id: ${id}`);
    }

    return user;
};


// Get/users - obteniendo usuarios
const getUsers = async () => {

    const usersDb = await User.findAll();

    return usersDb.length !== 0 ? usersDb : 'No hay usuarios creados en la Db' ;

   
};


// Post/user - creando un usuario
// const createUser = async (name, surnames, id, email, password, userType ) => {
//     const newUser = await User.create({name, surnames, id, email, password , userType});

//     return newUser;
// };

const createUser = async (name, surnames, id, email, password, userType) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  const newUser = await User.create({
    name,
    surnames,
    id,
    email,
    password: hashedPassword,
    userType
  });

  return newUser;
};



// Update/user -actualizar un usuario

const updateUser = async (id,  name, surnames, email, password, userType) => {

    try {
        const user = await User.findOne({ where: { id } });
    
        if (!user) {
            throw new Error("Usuario no encontrado.");
        }
    
        // Actualiza solo los campos proporcionados, si existen
        if (name) user.name = name;
        if (surnames) user.surnames = surnames;
        if (email) user.email = email;
        if (password) user.password = password;
        if (userType) user.userType = userType;
    
        await user.save(); // Guarda los cambios en la base de datos
    
        return user; // Devuelve el usuario actualizado
        
    } catch (error) {
        throw new Error(error);
    }
};

// Método para marcar un usuario como eliminado
const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    
    if (!user) {
        throw new Error(`No se encontró un usuario con el id: ${id}`);
    }

    // Marcar el usuario como eliminado
    user.deleted = true;
    await user.save();

    return user;
};




module.exports = {
    searchUserByName,
    getUserById,
    getUsers, 
    createUser,
    updateUser,
    deleteUser
};