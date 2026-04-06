const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors()); // Esto permite que el Front se conecte

dbConnection();
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server en ${PORT}`));