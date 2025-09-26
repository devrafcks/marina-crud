// Dependências
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./db'); // Conexão com MongoDB

// Rotas
const authRoutes = require('./routes/authRoutes');
const barcoRoutes = require('./routes/barcoRoutes');
const tripulanteRoutes = require('./routes/tripulanteRoutes');
const authMiddleware = require('./middleware/authMiddleware');

// Inicializa app
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// --- Rotas públicas ---
// /login, /logout, /register
app.use('/', authRoutes);

// --- Redireciona raiz para login ---
app.get('/', (req, res) => {
  res.redirect('/login');
});

// --- Rotas protegidas ---
// Barcos e tripulantes só acessíveis se estiver logado
app.use('/barcos', authMiddleware, barcoRoutes);
app.use('/tripulantes', authMiddleware, tripulanteRoutes);

// --- Dashboard/Admin ---
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

// --- Rota de saúde ---
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// --- Inicializa servidor ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
