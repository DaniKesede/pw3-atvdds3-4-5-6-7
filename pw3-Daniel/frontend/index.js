const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const clienteRoutes = require('./route/routesCliente')
const procedimentoRoutes = require('./route/routesProcedimento')

const app = express();
app.use(express.json()); 
app.use(cors());

mongoose.connect('mongodb+srv://danieldsousa76:Geovanna76!@pw3salao.twtrw.mongodb.net/', {
  
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error(err));


app.use('/clientes', clienteRoutes);
app.use('/procedimentos', procedimentoRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
