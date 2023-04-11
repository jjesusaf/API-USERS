// * Información para la conexión xon la base de datos;
const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: 'users',
    port: 5432,
    host: "localhost", 
    username: 'jjaf', 
    password:'Blacky1994',
    dialect: "postgres",
}

)

module.exports = db;

