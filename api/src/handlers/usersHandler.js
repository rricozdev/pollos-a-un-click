const {
  searchUserByName,
  getUserByidentification,
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
  const { identification } = req.params;
  console.log("esto es identification:", identification);

  try {
    const user = await getUserByidentification(identification);

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
    const { name, identification, email, password, role } = req.body;

    const newUser = await createUser(name, identification, email, password, role);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Put/users - actualizar un usuario
const updateUserHandler = async (req, res) => {
  try {
    const { identification } = req.params; // Obtén el id del usuario de los parámetros de la ruta
    const { name,  email, password, role } = req.body;

    // Verificar si se proporcionó al menos un campo para actualizar
    if (!name && !email && !password && !role) {
      throw new Error("Debe proporcionar al menos un campo para actualizar.");
    }

    // Llama a la función updateUser del controlador, que interactúa con la base de datos y el modelo
    const updatedUser = await updateUser(
      identification, // Utiliza el id del usuario obtenido de los parámetros de la ruta
      name,      
      email,
      password,
      role
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete
const deleteUserHandler = async (req, res) => {
  try {
      const { identification } = req.params;
      await deleteUser(id);
      res.status(200).json({ message: `Usuario con id ${identification} ha sido eliminado lógicamente.` });
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
