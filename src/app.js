const express = require("express");
const cors = require('cors');
const app = express()
const PORT  = 10000; 
const morgan = require("morgan");
const db = require("./utils/database");
const User = require("./models/users.model");
const userRoutes = require('./routes/user.routes');

User;

db.authenticate()   
    .then(() => {
        console.log("Conexión a base de datos exitosa!")
    })
    .catch((error) => {
        console.log(error)
    })

db.sync()
    .then(()=>{
        console.log("Base de datos sincronizada")
    })
    .catch((error) =>{
        console.log(error)
    }) 
    
app.use(cors())    
app.use(express.json());       
app.use(userRoutes);
app.use(morgan("dev"));


app.get("/", (req, res) => {
    res.send("Bienvenido a mi servidor")
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});




// Crear un Crud
// para TODO
// Crear una tarea
// leer todas las tareas 
// actualizar una tarea 
// eliminar una tarea 
// Tarea : title, description, status (completada o no está completada)
// vas a usar express, sequelize 
// crear un archivo de rutas para manejar las rutas de los todos 
// te recomiendo que tus endpoints sean '/api/v1/todo/'