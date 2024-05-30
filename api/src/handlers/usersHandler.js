const {
  searchUserByName,
  getUserByid,
  getUserByEmail,
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


// Get/users/{:identification} - obtener usuario por id
const getUserByIdHandler = async (req, res) => {
  const { id } = req.params;
  console.log("esto es id:", id);

  try {
    const user = await getUserByid(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


// Get/users - obtener user por email , consulta en db
//ejemplo: Get ---> http://localhost:3001/users/email?email=ytesillo@unicartagena.edu.co
const getUserByEmailHandler = async (req, res) => {
  const { email } = req.query; // Usar req.query para obtener el email desde la URL

  try {
    const userByEmail = await getUserByEmail(email);
    console.log(`Esto es user by email: ${userByEmail}`);
    if (userByEmail.length > 0) {
      res.status(200).json(userByEmail);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}





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
      await deleteUser(identification);
      res.status(200).json({ message: `Usuario con id ${identification} ha sido eliminado lógicamente.` });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  getUserByIdHandler,
  getUserByEmailHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler
};

