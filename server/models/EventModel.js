import db from "../database/db.js";
import { DataTypes } from "sequelize";

const EventModel = db.define('Event', {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    type: {  // Nuevo campo
        type: DataTypes.STRING,  
        allowNull: false,       
      },
  }, {
    tableName: 'events',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  export default EventModel