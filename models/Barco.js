const mongoose = require('mongoose');

const barcoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  capacidade: { type: Number, required: true },
  status: { type: String, enum: ['Atracado', 'Navegando', 'Em manutenção'], default: 'Atracado' },
}, { timestamps: true });

module.exports = mongoose.model('Barco', barcoSchema);
