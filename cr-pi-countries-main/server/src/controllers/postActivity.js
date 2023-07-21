const { Activity, Country } = require('../db');

const postActivity = async (req, res) => {
  try {
    const { id, name, difficulty, duration, season ,countries  } = req.body;

    if (!id || !name || !difficulty || !duration || !season) {
      return res.status(400).send('Faltan datos de la actividad');
    }

    // Crear la actividad en BD
    const activityCreada = await Activity.create({
      id,
      name,
      difficulty,
      duration,
      season,
    });

    // Obtener los países relacionados con la actividad a partir del array enviado en el body

    if (countries && countries.length > 0) {
      await activityCreada.addCountries(countries);
    }

    return res.status(200).json(activityCreada);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = postActivity;

/* {
  "id": "SJSJ",
  "name": "Tour en bicicleta",
  "difficulty": 3,
  "duration": 2,
  "season": "Verano",
  "countries": ["USA", "CAN"]
} */

