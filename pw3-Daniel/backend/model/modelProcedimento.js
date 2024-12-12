
const mongoose = require('mongoose');

const procedimentoSchema = new mongoose.Schema({
  procedimento: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Procedimento', procedimentoSchema);
