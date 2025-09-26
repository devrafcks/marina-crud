const express = require('express');
const router = express.Router();
const barcoController = require('../controllers/barcoController');

// Criar barco
router.get('/novo', barcoController.novoForm);
router.post('/novo', barcoController.criar);

// Editar barco
router.get('/:id/editar', barcoController.editarForm);
router.post('/:id/editar', barcoController.atualizar);

// Deletar barco
router.post('/:id/deletar', barcoController.deletar);

module.exports = router;
