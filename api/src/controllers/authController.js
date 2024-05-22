const { User } = require('../db');
const bcrypt = require('bcryptjs');

// Lógica de login
const loginUser = async (id, password) => {
  const user = await User.findOne({ where: { id } });

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Contraseña incorrecta');
  }

  return user; // Aquí podrías devolver sólo información básica del usuario
};

module.exports = {
  loginUser,
};
