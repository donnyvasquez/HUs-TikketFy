const express = require('express');
const path = require('path');

const app = express();

// Configuración para servir archivos estáticos desde la carpeta 'css' y 'scss'
app.use(express.static(path.join(__dirname, 'dist')));

// Aquí configuras la vista de tu motor EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.get('/', (req, res) => {
  res.render('index', { title: 'Mi Proyecto', body: ''});
});
app.get('/price-type', (req, res) => {
  res.render('price-type', { 
    title: 'Tipos de Precios', body: '' 
  });
});
// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
