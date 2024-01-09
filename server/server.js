const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_de_tu_base_de_datos',
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    throw err;
  }
  console.log('Conexión a MySQL establecida');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para registro de usuarios
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Hash de la contraseña antes de almacenarla en la base de datos
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error al registrar usuario en MySQL:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      res.status(201).send('Usuario registrado con éxito');
    }
  });
});

// Ruta para login de usuarios
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE username = ?';
  db.query(sql, [username], async (err, result) => {
    if (err) {
      console.error('Error al buscar usuario en MySQL:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      if (result.length > 0) {
        const match = await bcrypt.compare(password, result[0].password);
        if (match) {
          res.status(200).send('Inicio de sesión exitoso');
        } else {
          res.status(401).send('Contraseña incorrecta');
        }
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor Express.js escuchando en el puerto ${port}`);
});
