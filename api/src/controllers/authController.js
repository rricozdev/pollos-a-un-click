// const { User } = require('../db');
// const bcrypt = require('bcryptjs');

// // Lógica de login
// const loginUser = async (email, password) => {
//   const user = await User.findAll({ where: { email } });

//   if (!user) {
//     throw new Error('Usuario no encontrado');
//   }

//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) {
//     throw new Error('Contraseña incorrecta');
//   }

//   return user; // Aquí podrías devolver sólo información básica del usuario
// };

// module.exports = {
//   loginUser,
// };


// const { User } = require('../db');
// const bcrypt = require('bcryptjs');

// // Lógica de login
// const loginUser = async (email, password) => {
//   const user = await User.findOne({ where: { email } });

//   if (!user) {
//     throw new Error('Usuario no encontrado');
//   }

//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) {
//     throw new Error('Contraseña incorrecta');
//   }

//   return user; // Aquí podrías devolver sólo información básica del usuario
// };

// module.exports = {
//   loginUser,
// };

const { User } = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Lógica de login
const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Contraseña incorrecta');
  }

  // Generar el token JWT
  const token = jwt.sign({ userId: user.id, email: user.email }, 'clave_secreta', { expiresIn: '1h' });

  return { user, token };
};

module.exports = {
  loginUser,
};
