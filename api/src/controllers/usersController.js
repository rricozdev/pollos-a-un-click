const { User } = require("../db");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

// Get/users?name='Yuranis'
const searchUserByName = async (name) => {
  const lowercaseName = name.toLowerCase(); // procesamos el nombre a minúsculas.

  const dBUsers = await User.findAll({
    where: {
      name: {
        [Op.iLike]: `${lowercaseName}%`,
      },
    },
  });

  console.log(dBUsers);

  return dBUsers.length !== 0
    ? dBUsers
    : `No se encontró un usuario con el nombre ${name}`;
};

// Get/users/{:identification} ---> http://localhost:3001/users/85123456
const getUserByidentification = async (identification) => {
  const user = await User.findOne({
    where: { identification },
  });

  if (!user) {
    throw new Error(
      `No se encontró un usuario con la identificación: ${identification}`
    );
  }

  return user;
};

// Get/users/email - buscar en la db si el usuario autenticado con Auth0 en el frontend, ya está registrado o creado en db
const getUserByEmail = async (email) => {
  const userDbByEmail =  await User.findAll({
    where: {
      email,
    },
  });

  return userDbByEmail;
};

// Get/users - obteniendo usuarios
const getUsers = async () => {
  const usersDb = await User.findAll();

  return usersDb.length !== 0 ? usersDb : "No hay usuarios creados en la Db";
};



// Post/user - creando un usuario
const createUser = async (name, identification, email, password, role) => {
  const salt = await bcrypt.genSalt(10);

  // Verifica si algún campo obligatorio está vacío
  if (!name || !identification || !email || !password || !role) {
    throw new Error("Todos los campos son obligatorios.");
  }

  const useridentification = await User.findOne({
    where: { identification },
  });

  if (useridentification) {
    // Check if useridentification exists (avoidentification unnecessary comparison)
    console.log(`El identification: ${identification} ya está registrado...`);
    throw new Error(
      `El identification: ${identification} ya está registrado...`
    );
  }

  const userEmail = await User.findOne({
    where: { email },
  });

  if (userEmail) {
    console.log(`El email: ${email} ya está registrado...`);
    throw new Error(`El email: ${email} ya está registrado...`);
  }

  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    name,
    identification,
    email,
    password: hashedPassword,
    role,
  });

  return newUser;
};

// Update/user -actualizar un usuario

const updateUser = async (identification, name, email, password, role) => {
  try {
    const user = await User.findOne({ where: { identification } });

    if (!user) {
      throw new Error("Usuario no encontrado.");
    }

    // Actualiza solo los campos proporcionados, si existen
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }
    if (role) user.role = role;

    await user.save(); // Guarda los cambios en la base de datos

    return user; // Devuelve el usuario actualizado
  } catch (error) {
    throw new Error(error);
  }
};

// Método para marcar un usuario como eliminado
const deleteUser = async (identification) => {
  const user = await User.findByPk(identification);

  if (!user) {
    throw new Error(
      `No se encontró un usuario con el identification: ${identification}`
    );
  }

  // Marcar el usuario como eliminado
  user.deleted = true;
  await user.save();

  return user;
};

module.exports = {
  searchUserByName,
  getUserByidentification,
  getUserByEmail,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
