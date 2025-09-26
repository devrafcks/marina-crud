// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Login
exports.loginForm = (req, res) => {
  res.render('login', { error: null });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.render('login', { error: 'Usuário não encontrado' });

    const valid = await user.comparePassword(password);
    if (!valid) return res.render('login', { error: 'Senha incorreta' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'segredo123', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/admin');
  } catch (err) {
    console.log(err);
    res.render('login', { error: 'Erro ao fazer login' });
  }
};

// Registro
exports.registerForm = (req, res) => {
  res.render('register', { error: null });
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const exists = await User.findOne({ username });
    if (exists) return res.render('register', { error: 'Usuário já existe' });

    const user = new User({ username, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'segredo123', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/admin');
  } catch (err) {
    console.log(err);
    res.render('register', { error: 'Erro ao criar usuário' });
  }
};

// Logout
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
};
