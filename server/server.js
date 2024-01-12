const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4200;

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'Guillermo',
  password: '1234',
  database: 'guesar',
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
app.use(cors());

// Registro Usuarios
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
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

// Login Usuarios
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ?'; // Cambia a buscar por el campo 'email'
  db.query(sql, [email], async (err, result) => {
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

// Cambio de Contraseña
app.post('/change-password', async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  const checkCredentialsSQL = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(checkCredentialsSQL, [email], async (err, result) => {
    if (err) {
      console.error('Error al buscar usuario en MySQL:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      if (result.length > 0) {
        const match = await bcrypt.compare(oldPassword, result[0].password);
        if (match) {
          const hashedNewPassword = await bcrypt.hash(newPassword, 10);
          const updatePasswordSQL = 'UPDATE usuarios SET password = ? WHERE email = ?';
          db.query(updatePasswordSQL, [hashedNewPassword, email], (err, updateResult) => {
            if (err) {
              console.error('Error al cambiar la contraseña en MySQL:', err);
              res.status(500).send('Error interno del servidor');
            } else {
              res.status(200).send('Contraseña cambiada con éxito');
            }
          });
        } else {
          res.status(401).send('Contraseña actual incorrecta');
        }
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    }
  });
});

app.use(express.static(path.join(__dirname, 'dist/tfg-guille-cesar-no-standalone')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/tfg-guille-cesar-no-standalone/src/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor Express.js escuchando en el puerto ${port}`);
});
