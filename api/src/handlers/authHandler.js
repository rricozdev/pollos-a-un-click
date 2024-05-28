// const { loginUser } = require("../controllers/authController");

// // Handler para login
// const loginUserHandler = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await loginUser(email, password);

//     res.status(200).json({ message: 'Login exitoso', user: { email: user.email, name: user.name } });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = {
//   loginUserHandler,
// };

// const { loginUser } = require("../controllers/authController");

// // Handler para login
// const loginUserHandler = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await loginUser(email, password);

//     res.status(200).json({ message: 'Login exitoso', user: { email: user.email, name: user.name } });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = {
//   loginUserHandler,
// };

const { loginUser } = require("../controllers/authController");

// Handler para login
const loginUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);

    res.status(200).json({ message: 'Login exitoso', user: { email: user.email, name: user.name }, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUserHandler,
};

