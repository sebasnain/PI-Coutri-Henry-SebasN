const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {  //id , name difficulty ,duration , season
    id:{
      type: DataTypes.UUID,
      default:DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
          },
    },
    duration: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    season: {
        type: DataTypes.ENUM('Summer', 'Autumn','Winter', 'Spring'),
        allowNull: false,
    }

  });
};

/* 📍 MODELO 2 | Activity

ID. *
Nombre. *
Dificultad (número del 1 al 5). *
Duración (en horas).
Temporada (Verano, Otoño, Invierno o Primavera). *
 */