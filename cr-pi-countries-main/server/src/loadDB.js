const axios = require("axios");
const { Country } = require("./models/Country");

const loadDB = async () => {
  try {
    // esto es para la  petición a la API de paises
    const response = await axios.get("http://localhost:5000/countries");
    const countries = response.data;

    // Mapear los países para obtener solo las propiedades necesarias
    const countriesToCreate = countries.map((country) => ({
      name: country.name,
      image: country.image,
      continent: country.continent,
      capital: country.capital ? country.capital : " ",
      population: country.population,
    }));

    // Guardar todos los países en la base de datos, bulkCreate toma el arreglo y lo hace solo
    await Country.bulkCreate(countriesToCreate);

    console.log("Países guardados en la base de datos");
  } catch (error) {
    console.error("Error al obtener los países desde la API o guardarlos en la base de datos:", error);
  }
};

module.exports = { loadDB };
