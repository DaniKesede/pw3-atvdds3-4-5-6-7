const express = require('express');
const router = express.Router();
const Procedimento = require('../model/modelProcedimento'); 

router.post('/', async (req, res) => {
  try {
    console.log(req.body); 
    if (isNaN(req.body.valor)) {
      return res.status(400).json({ mensagem: 'Preço inválido' });
    }
    const novoProcedimento = new Procedimento(req.body);
    await novoProcedimento.save();
    res.status(201).json(novoProcedimento);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao criar procedimento', error });
  }
});



router.get('/', async (req, res) => {  
  try {
      const doces = await Procedimento.find(); 
      res.json({ data: doces });
  } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

module.exports = router; 
