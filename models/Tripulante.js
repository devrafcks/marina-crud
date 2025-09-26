const mongoose = require('mongoose');

const tripulanteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  funcao: { type: String, required: true },
  barcoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Barco' }, // relaciona tripulante com barco
}, { timestamps: true });

module.exports = mongoose.model('Tripulante', tripulanteSchema);
