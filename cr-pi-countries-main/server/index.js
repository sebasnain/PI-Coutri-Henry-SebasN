const loadDB = require("./src/loadDB")
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  loadDB()  //para que cargue en la BD los datos de la api
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
