const Tripulante = require('../models/Tripulante');
const Barco = require('../models/Barco');

// Formulário de criação
exports.novoForm = async (req, res) => {
  const barcos = await Barco.find();
  res.render('tripulantes/novo', { barcos });
};

// Criar tripulante
exports.criar = async (req, res) => {
  try {
    await Tripulante.create(req.body);
    res.redirect('/admin');
  } catch (err) {
    console.log(err);
    res.send('Erro ao criar tripulante');
  }
};

// Formulário de edição
exports.editarForm = async (req, res) => {
  try {
    const tripulante = await Tripulante.findById(req.params.id);
    const barcos = await Barco.find();
    res.render('tripulantes/editar', { tripulante, barcos });
  } catch (err) {
    console.log(err);
    res.send('Tripulante não encontrado');
  }
};

// Atualizar tripulante
exports.atualizar = async (req, res) => {
  try {
    await Tripulante.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin');
  } catch (err) {
    console.log(err);
    res.send('Erro ao atualizar tripulante');
  }
};

// Deletar tripulante
exports.deletar = async (req, res) => {
  try {
    await Tripulante.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
  } catch (err) {
    console.log(err);
    res.send('Erro ao deletar tripulante');
  }
};
