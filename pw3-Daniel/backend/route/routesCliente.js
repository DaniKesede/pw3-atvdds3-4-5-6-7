const express = require('express');
const router = express.Router();
const Cliente = require('../model/modelCliente');


router.post('/', async (req, res) => {
  try {
    const novoCliente = new Cliente(req.body); 
    await novoCliente.save(); 
    res.status(201).json(novoCliente); 
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao criar um novo cliente', error }); 
  }
});

module.exports = router; 
