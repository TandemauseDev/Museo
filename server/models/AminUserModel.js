// models/AdminUser.js
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../database/db.js";

const AdminUser = db.define("AdminUser", {
  admin_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  password_hash: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: "admin_users",
});

// Método para comparar contraseñas
AdminUser.prototype.validPassword = async function(password) {
  return await bcrypt.compare(password, this.password_hash);
};

export default AdminUser;
