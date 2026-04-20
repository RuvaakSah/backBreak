const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

dbConnection();

app.use('/cards', require('./routes/cardRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor Cardmarket en puerto ${PORT}`));