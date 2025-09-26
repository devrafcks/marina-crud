const Barco = require('../models/Barco');

// Listar
exports.listar = async (req, res) => {
  const barcos = await Barco.find();
  res.render('admin', { barcos });
};

exports.novoForm = (req, res) => {
  res.render('barcos/novo');
};

// Criar barco
exports.criar = async (req, res) => {
  try {
    await Barco.create(req.body);
    res.redirect('/admin');
  } catch (err) {
    console.log(err);
    res.send('Erro ao criar barco');
  }
};

// Formulário de edição
exports.editarForm = async (req, res) => {
  try {
    const barco = await Barco.findById(req.params.id);
    res.render('barcos/editar', { barco });
  } catch (err) {
    console.log(err);
    res.send('Barco não encontrado');
  }
};

// Atualizar barco
exports.atualizar = async (req, res) => {
  try {
    await Barco.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin');
  } catch (err) {
    console.log(err);
    res.send('Erro ao atualizar barco');
  }
};

// Deletar barco
exports.deletar = async (req, res) => {
  try {
    await Barco.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
  } catch (err) {
    console.log(err);
    res.send('Erro ao deletar barco');
  }
};
