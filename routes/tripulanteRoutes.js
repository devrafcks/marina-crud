const express = require('express');
const router = express.Router();
const tripulanteController = require('../controllers/tripulanteController');

// Criar tripulante
router.get('/novo', tripulanteController.novoForm);
router.post('/novo', tripulanteController.criar);

// Editar tripulante
router.get('/:id/editar', tripulanteController.editarForm);
router.post('/:id/editar', tripulanteController.atualizar);

// Deletar tripulante
router.post('/:id/deletar', tripulanteController.deletar);

module.exports = router;
