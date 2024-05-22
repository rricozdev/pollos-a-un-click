const { loginUser } = require("../controllers/authController");

// Handler para login
const loginUserHandler = async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await loginUser(id, password);

    res.status(200).json({ message: 'Login exitoso', user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUserHandler,
};
