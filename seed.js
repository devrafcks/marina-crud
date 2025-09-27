// seed-hollowknight.js
const mongoose = require('mongoose');
require('./db'); // usa sua conexão do db.js
const Barco = require('./models/Barco');
const Tripulante = require('./models/Tripulante');

async function seed() {
  try {
    // Criar barcos
    const barcos = await Barco.insertMany([
      { nome: 'Black Pearl', tipo: 'Navio Pirata', capacidade: 12, status: 'Atracado' },
      { nome: 'Queen Mama Chanter', tipo: 'Navio de guerra', capacidade: 18, status: 'Navegando' },
      { nome: 'Flying Lamb', tipo: 'Navio mercante', capacidade: 10, status: 'Em manutenção' },
      { nome: 'Baratie', tipo: 'Restaurante flutuante', capacidade: 15, status: 'Atracado' },
      { nome: 'Thatch\'s Ship', tipo: 'Navio Pirata', capacidade: 8, status: 'Navegando' },
    ]);

    console.log('Barcos adicionados!');

    // Criar tripulantes de Hollow Knight
    await Tripulante.insertMany([
      { nome: 'The Knight', funcao: 'Explorador', barcoId: barcos[0]._id },
      { nome: 'Hornet', funcao: 'Guarda', barcoId: barcos[0]._id },
      { nome: 'Quirrel', funcao: 'Investigador', barcoId: barcos[1]._id },
      { nome: 'Zote', funcao: 'Marinheiro', barcoId: barcos[1]._id },
      { nome: 'Tiso', funcao: 'Sentinela', barcoId: barcos[2]._id },
      { nome: 'Cloth', funcao: 'Aventureira', barcoId: barcos[3]._id },
      { nome: 'Lemm', funcao: 'Escoteiro', barcoId: barcos[4]._id },
    ]);

    console.log('Tripulantes adicionados!');
    mongoose.connection.close();
    console.log('Seed concluído com sucesso!');
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
}

seed();
