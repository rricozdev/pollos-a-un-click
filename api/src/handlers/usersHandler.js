const {
  searchUserByName,
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/usersController");

// Get/users - obtener todos los usuarios - obtener por nombre de usuario
const getUsersHandler = async (req, res) => {
  try {
    const { name } = req.query;

    const results = name ? await searchUserByName(name) : await getUsers();

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get/users/{:id} - obtener usuario por id
const getUserByIdHandler = async (req, res) => {
  const { id } = req.params;
  console.log("esto es id:", id);

  try {
    const user = await getUserById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};



// Post/users - crear un usuario
const createUserHandler = async (req, res) => {
  try {
    console.log("Params:", req.params);
    console.log("Body:", req.body);
    const { name, surnames, id, email, password, userType } = req.body;

    const newUser = await createUser(name, surnames, id, email, password, userType);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Put/users - actualizar un usuario
const updateUserHandler = async (req, res) => {
  try {
    const { id } = req.params; // Obtén el id del usuario de los parámetros de la ruta
    const { name, surnames, email, password, userType } = req.body;

    // Verificar si se proporcionó al menos un campo para actualizar
    if (!name && !surnames && !email && !password && !userType) {
      throw new Error("Debe proporcionar al menos un campo para actualizar.");
    }

    // Llama a la función updateUser del controlador, que interactúa con la base de datos y el modelo
    const updatedUser = await updateUser(
      id, // Utiliza el id del usuario obtenido de los parámetros de la ruta
      name,
      surnames,
      email,
      password,
      userType
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete
const deleteUserHandler = async (req, res) => {
  try {
      const { id } = req.params;
      await deleteUser(id);
      res.status(200).json({ message: `Usuario con id ${id} ha sido eliminado lógicamente.` });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler
};
