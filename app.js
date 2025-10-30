const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./db'); 

// Rotas
const authRoutes = require('./routes/authRoutes');
const barcoRoutes = require('./routes/barcoRoutes');
const tripulanteRoutes = require('./routes/tripulanteRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Rotas públicas
// /login, /logout, /register
app.use('/', authRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.redirect('/login');
});

// Rotas protegidas
// Barcos e tripulantes
app.use('/barcos', authMiddleware, barcoRoutes);
app.use('/tripulantes', authMiddleware, tripulanteRoutes);

// Dashboard
app.get('/admin', authMiddleware, async (req, res) => {
  const Barco = require('./models/Barco');
  const Tripulante = require('./models/Tripulante');

  try {
    const barcos = await Barco.find();
    const tripulantes = await Tripulante.find().populate('barcoId');
    res.render('admin', { barcos, tripulantes });
  } catch(err) {
    console.log(err);
    res.send('Erro ao carregar dados');
  }
});

// Health 
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Inicia servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
