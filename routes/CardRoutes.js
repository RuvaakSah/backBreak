const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// Obtener todas las cartas
router.get('/', async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
});

// Crear nueva carta
router.post('/', async (req, res) => {
    const newCard = new Card(req.body);
    await newCard.save();
    res.json(newCard);
});

// Borrar carta
router.delete('/:id', async (req, res) => {
    await Card.findByIdAndDelete(req.params.id);
    res.json({ message: "Carta eliminada" });
});

module.exports = router;