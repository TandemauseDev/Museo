// controllers/AuthController.js
import bcrypt from "bcrypt";
import AdminUser from "../models/AminUserModel.js";

// Controlador para registrar un usuario
export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await AdminUser.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Hashear la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const newUser = await AdminUser.create({
      username,
      password_hash: passwordHash,
    });

    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar el usuario", error });
  }
};

// Controlador para loguear un usuario
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario por nombre de usuario
    const user = await AdminUser.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
    }

    // Verificar la contraseña
    const isPasswordValid = await user.validPassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
    }

    res.status(200).json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión", error });
  }
};
